import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponentComponent } from '../parent-component/cards-component/cards-component.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GenreWiseBookComponent } from './genre-wise-book/genre-wise-book.component';



@NgModule({
  declarations: [
    CardsComponentComponent,
    ShoppingCartComponent,
    GenreWiseBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponentComponent,
    ShoppingCartComponent,
    GenreWiseBookComponent
  ]
})
export class ParentComponentModule { }
