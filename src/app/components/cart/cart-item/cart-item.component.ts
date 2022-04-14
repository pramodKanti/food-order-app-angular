import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/modal/meal';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  item: Meal;

  constructor() {}

  ngOnInit() {
    console.log('sdfewg');
  }

  onRemove() {}

  onAdd() {}
}
