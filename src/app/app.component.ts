import { Component } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'food-order-app';
  cartShow: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.cartBtn.subscribe((cartShow) => {
      this.cartShow = cartShow;
    });
  }
}
