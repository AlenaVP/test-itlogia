import { Component } from '@angular/core';
import { pizzas } from 'src/app/mock/pizzas';
import { PizzaCard } from 'src/app/model/pizza-card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  public cards: PizzaCard[] = pizzas;
}
