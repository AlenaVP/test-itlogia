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

  constructor(private http: HttpClient) { }

  onSubmit(orderForm: NgForm) {
    if (orderForm.valid) {
      const formData = orderForm.value;
      this.http.post<void>('/pizzas', formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(
          (response) => console.log('never be run', response),
          (error) => {
            alert('Thank you for your order');
            console.log('of fake POST request ', error);
          }
        );
      orderForm.reset();
    }
  }
}
