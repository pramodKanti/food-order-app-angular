import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'food-order-app';
  cartShow: boolean = false;
  orderPlaced: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartBtn.subscribe((cartShow) => {
      this.cartShow = cartShow;
    });
    this.cartService.orderPlaced.subscribe((orderPlaced) => {
      this.orderPlaced = orderPlaced;
    });
    this.cartService.modalClose.subscribe((modalClose) => {
      this.orderPlaced = modalClose;
    });
  }
}
