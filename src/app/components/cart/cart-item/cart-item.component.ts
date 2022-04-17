import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/modal/meal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: Meal = {
    name: '',
    price: 0,
    amount: 0,
    description: '',
    id: '',
  };

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onRemove() {
    this.cartService.removeToCart(this.item);
  }

  onAdd() {
    this.cartService.addToCart(this.item);
  }
}
