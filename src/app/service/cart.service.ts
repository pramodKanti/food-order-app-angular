import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Meal } from '../modal/meal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  @Output() cartBtn: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
