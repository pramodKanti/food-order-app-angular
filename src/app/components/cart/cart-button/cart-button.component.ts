import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css'],
})
export class CartButtonComponent implements OnInit {
  badge: number = 3;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  cartToggle() {
    this.cartService.cartBtn.next(true);
  }
}
