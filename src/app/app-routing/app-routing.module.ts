import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponentComponent } from 'src/app/components/parent-component/cards-component/cards-component.component';
import { GenreWiseBookComponent } from 'src/app/components/parent-component/genre-wise-book/genre-wise-book.component';
import { ShoppingCartComponent } from 'src/app/components/parent-component/shopping-cart/shopping-cart.component';
const routes: Routes = [
  {
    path:'',
    component: CardsComponentComponent
  },
  {
  path: 'genre',
  component: GenreWiseBookComponent
},
{
  path:'cart',
  component: ShoppingCartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
