import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css'],
})
export class CartButtonComponent implements OnInit {
  badge: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.updateBadge.subscribe((badge: number) => {
      this.badge = badge;
    });
  }

  cartToggle() {
    this.cartService.cartBtn.next(true);
  }
}
