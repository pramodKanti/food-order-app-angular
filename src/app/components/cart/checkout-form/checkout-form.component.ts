import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meal } from 'src/app/modal/meal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  name: string;
  street: string;
  city: string;
  postalCode: number;
  cartItem: Meal[] = [];

  formValid: boolean = false;

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void {
    this.cartItem = this.cartService.getCartItem();
  }

  onCancel() {
    this.cartService.cartBtn.next(false);
  }

  onOrder(F: NgForm) {
    if (!F.valid) {
      console.log('please enter a valid detail');
      this.formValid = true;
    } else {
      const userData = JSON.stringify({
        user: F.value,
        oderedItem: this.cartItem,
      });

      this.http
        .post(
          'https://meals-item-ed275-default-rtdb.firebaseio.com/odered.json',
          userData,
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .subscribe((item) => {
          this.cartService.orderPlaced.next(true);
          this.cartService.cartBtn.next(false);
          this.cartService.clearCart();
        });
    }
  }
}
