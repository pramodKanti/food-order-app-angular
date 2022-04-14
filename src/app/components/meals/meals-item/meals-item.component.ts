import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/modal/meal';

@Component({
  selector: 'app-meals-item',
  templateUrl: './meals-item.component.html',
  styleUrls: ['./meals-item.component.css'],
})
export class MealsItemComponent implements OnInit {
  @Input() meal: Meal;

  constructor() {}

  ngOnInit() {}
}
