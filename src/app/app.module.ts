import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchComponent } from './components/layout/search/search.component';
import { CartButtonComponent } from './components/cart/cart-button/cart-button.component';
import { CartIconComponent } from './components/cart/cart-icon/cart-icon.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { AvailableMealsComponent } from './components/meals/available-meals/available-meals.component';
import { MealItemFormComponent } from './components/meals/meal-item-form/meal-item-form.component';
import { MealsComponent } from './components/meals/meals/meals.component';
import { MealsItemComponent } from './components/meals/meals-item/meals-item.component';
import { MealsSummaryComponent } from './components/meals/meals-summary/meals-summary.component';
import { CardComponent } from './components/ui/card/card.component';
import { ErrorModalComponent } from './components/ui/error-modal/error-modal.component';
import { LoadingIndicatorComponent } from './components/ui/loading-indicator/loading-indicator.component';

import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

import { OverlayComponent } from './components/layout/modal/overlay/overlay.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { BackdropComponent } from './components/layout/modal/backdrop/backdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CartButtonComponent,
    CartIconComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    AvailableMealsComponent,
    MealItemFormComponent,
    MealsComponent,
    MealsItemComponent,
    MealsSummaryComponent,
    CardComponent,
    ErrorModalComponent,
    LoadingIndicatorComponent,
    CartItemComponent,

    OverlayComponent,
    ModalComponent,
    BackdropComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
