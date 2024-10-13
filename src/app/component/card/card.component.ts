import { Component, Input } from '@angular/core';
import { PizzaCard } from 'src/app/model/pizza-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() pizza!: PizzaCard;
  public btnHeight = '50px';
  public btnWidth = '242px';
}
