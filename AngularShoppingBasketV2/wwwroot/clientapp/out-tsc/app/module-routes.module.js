var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { OnlineComponent } from './online/online.component';
var routes = [
    { path: '', component: OnlineComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'basket', component: BasketComponent }
];
var ModuleRoutesModule = /** @class */ (function () {
    function ModuleRoutesModule() {
    }
    ModuleRoutesModule = __decorate([
        NgModule({
            exports: [RouterModule],
            imports: [RouterModule.forRoot(routes)],
        })
    ], ModuleRoutesModule);
    return ModuleRoutesModule;
}());
export { ModuleRoutesModule };
//# sourceMappingURL=module-routes.module.js.map