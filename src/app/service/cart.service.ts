import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Meal } from '../modal/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  @Output() cartBtn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @Output() mealItems: BehaviorSubject<Meal[]> = new BehaviorSubject([]);
  @Output() updateAmount: BehaviorSubject<number> = new BehaviorSubject(0);
  @Output() updateBadge: BehaviorSubject<number> = new BehaviorSubject(0);
  @Output() modalClose: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @Output() orderPlaced: BehaviorSubject<boolean> = new BehaviorSubject(false);

  totalAmount: number = 0;
  cartItem: Meal[] = [];
  badgeNumber: number = 0;

  constructor(private http: HttpClient) {}

  addToCart(meal: Meal) {
    console.log(this.badgeNumber);
    const existingItemIndex = this.cartItem.findIndex((i) => i.id === meal.id);

    const existingItem = this.cartItem[existingItemIndex];

    if (existingItem) {
      this.cartItem[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };

      this.badgeNumber += 1;
      console.log(this.badgeNumber);

      this.totalAmount = this.totalAmount + existingItem.price;
      console.log(this.totalAmount);
      this.updateAmount.next(this.totalAmount);
    } else {
      this.cartItem.push(meal);
      this.badgeNumber = this.badgeNumber + meal.amount;
      console.log(this.badgeNumber);
    }
    console.log(this.badgeNumber);

    this.updateBadge.next(this.badgeNumber);
  }

  removeToCart(meal: Meal) {
    const existingItemIndex = this.cartItem.findIndex((i) => i.id === meal.id);

    const existingItem = this.cartItem[existingItemIndex];

    if (existingItem.amount !== 1) {
      this.cartItem[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      this.totalAmount = this.totalAmount - existingItem.price;
      console.log(this.totalAmount);
      this.updateAmount.next(this.totalAmount);
    } else {
      this.cartItem.splice(existingItemIndex, 1);
      this.totalAmount = this.totalAmount - existingItem.price;
      console.log(this.totalAmount);
      this.updateAmount.next(this.totalAmount);
    }
  }

  getCartItem() {
    console.log(this.cartItem);
    return this.cartItem;
  }

  getTotalAmount() {
    this.cartItem.map((item) => {
      this.totalAmount = this.totalAmount + item.price * item.amount;
    });

    console.log(this.totalAmount);

    return this.totalAmount.toFixed(2);
  }

  clearCart() {
    this.cartItem = [];
    this.updateBadge.next(0);
    this.updateAmount.next(0);
    this.totalAmount = 0;
    this.getTotalAmount();
  }
}
