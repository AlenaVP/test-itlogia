import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() message = '';
  @Output() isModalClosed = new EventEmitter<boolean>();

  close() {
    this.isVisible = false;
    this.isModalClosed.emit(true);
  }
}
