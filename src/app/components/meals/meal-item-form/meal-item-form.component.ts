import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Meal } from 'src/app/modal/meal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-meal-item-form',
  templateUrl: './meal-item-form.component.html',
  styleUrls: ['./meal-item-form.component.css'],
})
export class MealItemFormComponent implements OnInit {
  amount: number = 1;
  @Input() mealId: string;
  meals: Meal[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.mealItems.subscribe((meal) => {
      this.meals = meal;
    });
  }

  onSubmit() {
    this.meals.forEach((meal, index) => {
      if (meal.id === this.mealId) {
        console.log(this.meals[index]);
        // this.cartService.cartItem.next(meal);
        this.cartService.addToCart({
          ...this.meals[index],
          amount: this.amount,
        });
      }
    });
  }
}
