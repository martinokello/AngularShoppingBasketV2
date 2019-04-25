var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Http, Request, RequestOptions, RequestMethod, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Injectable, Inject, ReflectiveInjector } from '@angular/core';
var basketService = /** @class */ (function () {
    function basketService() {
        this.grossTotal = 0.00;
        basketService_1.basket = [];
    }
    basketService_1 = basketService;
    basketService.prototype.GetProductById = function (productId) {
        return this.GetAllShopProducts().find(function (p) { return p.productId == productId; });
    };
    basketService.prototype.setBasketGross = function () {
        this.grossTotal = this.SumBasketGross();
    };
    basketService.prototype.AddProductToBasket = function (productId) {
        basketService_1.basket.push(this.GetProductById(productId));
        this.setBasketGross();
    };
    basketService.prototype.GetAllShopProducts = function () {
        var products = [];
        products.push({ productName: 'Pencil', productId: 1, productPrice: 2.99, productDescription: 'Drawing Pencils' });
        products.push({ productName: 'Plyers', productId: 2, productPrice: 3.99, productDescription: 'Plyers for cutting or working with plumbing' });
        products.push({ productName: 'Kite', productId: 3, productPrice: 4.99, productDescription: 'Childrens playing Kite, flying it in park' });
        products.push({ productName: 'Fountain Pen', productId: 4, productPrice: 5.99, productDescription: 'Fountain pens for working in offices. Uses Gel nibs' });
        products.push({ productName: 'A4 - Papers', productId: 5, productPrice: 2.99, productDescription: 'A4 Size Drawing paper for rough work' });
        return products;
    };
    basketService.prototype.SumBasketGross = function () {
        var total = 0.00;
        if (basketService_1.basket.length > 0) {
            for (var n = 0; n < basketService_1.basket.length; n++) {
                total += basketService_1.basket[n].productPrice;
            }
        }
        return parseFloat(total.toFixed(2));
    };
    basketService.prototype.RemoveFromBasket = function (prodId) {
        var indexToRemove = -1;
        for (var n = 0; n < basketService_1.basket.length; n++) {
            if (basketService_1.basket[n].productId == prodId) {
                indexToRemove = n;
                break;
            }
        }
        basketService_1.basket.splice(indexToRemove, 1);
        this.setBasketGross();
    };
    var basketService_1;
    basketService = basketService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], basketService);
    return basketService;
}());
export { basketService };
//# sourceMappingURL=basketService.js.map