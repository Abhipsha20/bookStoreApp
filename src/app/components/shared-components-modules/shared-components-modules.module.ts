import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared-components-modules/footer/footer.component';
import { NavHeaderComponent } from '../shared-components-modules/nav-header/nav-header.component';
import { GenreWiseBookComponent } from '../shared-components-modules/genre-wise-book/genre-wise-book.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavHeaderComponent,
    GenreWiseBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavHeaderComponent,
    GenreWiseBookComponent
  ]
})
export class SharedComponentsModulesModule { }
