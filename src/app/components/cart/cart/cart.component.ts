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
  cartShow: boolean = true;
  totalAmount: number;
  isOrder: boolean = false;

  ngOnInit() {
    this.cartItem = this.cartService.getCartItem();
    console.log(this.cartItem);
    this.cartService.updateAmount.subscribe(
      (amount) => (this.totalAmount = amount)
    );
    this.totalAmount = +this.cartService.getTotalAmount();
  }

  cartCloseHandler() {
    this.cartService.cartBtn.next(false);
    this.cartShow = false;
    console.log('bakdrop');
  }

  orderHandler() {
    this.isOrder = true;
  }
}
