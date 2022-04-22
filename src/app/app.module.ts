import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedComponentsModulesModule } from './shared-components-modules/shared-components-modules.module';
import { pComponentsModule } from './components/parent-component/p-comp.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    pComponentsModule,
    SharedComponentsModulesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
