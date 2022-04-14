import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Meal } from 'src/app/modal/meal';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-available-meals',
  templateUrl: './available-meals.component.html',
  styleUrls: ['./available-meals.component.css'],
})
export class AvailableMealsComponent implements OnInit {
  meals: Meal[] = [];
  isLoading: boolean = false;
  hasError: boolean = false;
  ErrorMessage: string = '';

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.isLoading = true;
    this.http
      .get<any>(
        'https://meals-item-ed275-default-rtdb.firebaseio.com/mealData.json'
      )
      .subscribe(
        (meals) => {
          for (let key in meals) {
            this.meals = meals[key];
          }

          console.log(this.meals);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.hasError = true;
          this.ErrorMessage = error.message;
        }
      );
  }
}
