import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/modal/meal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItem: Meal[] = [];

  ngOnInit() {}

  cartCloseHandler() {
    this.cartService.cartBtn.next(false);
  }
}
