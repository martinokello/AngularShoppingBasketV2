import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { OnlineComponent } from './online/online.component';

const routes: Routes = [
    { path: '', component: OnlineComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'basket', component: BasketComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class ModuleRoutesModule {
}
