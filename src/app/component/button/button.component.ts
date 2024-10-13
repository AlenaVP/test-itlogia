import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() height = '60px';
  @Input() width!: string;
  @Input() disabled = false;
  @Input() type = 'button';
}
