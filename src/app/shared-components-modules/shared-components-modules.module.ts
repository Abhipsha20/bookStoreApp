import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared-components-modules/footer/footer.component';
import { NavHeaderComponent } from '../shared-components-modules/nav-header/nav-header.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavHeaderComponent,
  ]
})
export class SharedComponentsModulesModule { }
