import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleRoutesModule } from './module-routes.module';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { OnlineComponent } from './online/online.component';

@NgModule({
  declarations: [
      AppComponent,
      ShopComponent,
      BasketComponent,
      OnlineComponent
  ],
  imports: [
      BrowserModule,
      ModuleRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
