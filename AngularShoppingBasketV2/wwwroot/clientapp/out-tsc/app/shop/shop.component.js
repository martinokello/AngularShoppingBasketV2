var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { basketService } from '../../basketServices/basketService';
var ShopComponent = /** @class */ (function () {
    function ShopComponent(basketService) {
        this.grossTotalChanged = new EventEmitter();
        this._basketService = basketService;
    }
    ShopComponent.prototype.addToBasket = function ($event) {
        var target = event.srcElement;
        var row = target.parentElement.parentElement;
        var prodId = row.querySelector('div.first-cell').textContent;
        this._basketService.AddProductToBasket(parseInt(prodId));
        this.grossTotal = this._basketService.grossTotal;
        this.grossTotalChanged.emit(this.grossTotal);
    };
    ShopComponent.prototype.ngOnInit = function () {
        this.shop = this._basketService.GetAllShopProducts();
        this.grossTotal = this._basketService.SumBasketGross();
    };
    __decorate([
        Input("grossTotal"),
        __metadata("design:type", Number)
    ], ShopComponent.prototype, "grossTotal", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ShopComponent.prototype, "grossTotalChanged", void 0);
    ShopComponent = __decorate([
        Component({
            selector: 'app-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.css'],
            providers: [basketService]
        }),
        __metadata("design:paramtypes", [basketService])
    ], ShopComponent);
    return ShopComponent;
}());
export { ShopComponent };
//# sourceMappingURL=shop.component.js.map