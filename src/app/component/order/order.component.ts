import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  private readonly destroyRef = inject(DestroyRef);

  public isModalVisible = false;
  public modalMessage = '';

  constructor(private http: HttpClient) { }

  onSubmit(orderForm: NgForm) {
    if (orderForm.valid) {
      const formData = orderForm.value;
      this.http.post<void>('/pizzas', formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(
          (response) => console.log('never be run', response),
          (error) => {
            this.modalMessage = 'Thank you for your order';
            this.isModalVisible = true;
            console.log('of fake POST request ', error);
          }
        );
      orderForm.reset();
    }
  }

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\./g, '');
  }

  onModalClose(reset: boolean) {
    if (reset) {
      this.isModalVisible = false;
    }
  }
}
