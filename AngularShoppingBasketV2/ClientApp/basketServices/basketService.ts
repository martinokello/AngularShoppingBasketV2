//import { Http, Request, RequestOptions, RequestMethod, RequestOptionsArgs, Headers, Response } from '@angular/http';
import {Injectable} from '@angular/core';
//import { Injectable, Inject, ReflectiveInjector } from '@angular/core';

@Injectable()
export class basketService{
    constructor(){
        basketService.basket = [];
    }
    static basket:IProduct[];
    public grossTotal:number = 0.00;
    public GetProductById(productId:number):IProduct{
        return this.GetAllShopProducts().find(p=> {return p.productId == productId});
    }
    public setBasketGross(){
    
        this.grossTotal = this.SumBasketGross();
      }
    public AddProductToBasket(productId:number):void{
        basketService.basket.push(this.GetProductById(productId));
        this.setBasketGross();
    }
    public GetAllShopProducts():IProduct[]{
        let products:IProduct[]|any = [];
        products.push(
            {productName:'Pencil', productId:1,productPrice:2.99,productDescription:'Drawing Pencils'});
            products.push(
            {productName:'Plyers', productId:2,productPrice:3.99,productDescription:'Plyers for cutting or working with plumbing'});
            products.push(
            {productName:'Kite', productId:3,productPrice:4.99,productDescription:'Childrens playing Kite, flying it in park'});
            products.push(
            {productName:'Fountain Pen', productId:4,productPrice:5.99,productDescription:'Fountain pens for working in offices. Uses Gel nibs'});
            products.push(
            {productName:'A4 - Papers', productId:5,productPrice:2.99,productDescription:'A4 Size Drawing paper for rough work'});
        return products;
    }
    
    public SumBasketGross():number{
        let total = 0.00;

        if(basketService.basket.length > 0){
          for(let n=0;n<basketService.basket.length;n++){
              total+= basketService.basket[n].productPrice;
          }
        }

        return parseFloat(total.toFixed(2));
    }    
    
    public RemoveFromBasket(prodId:number):void{
        var indexToRemove = -1;
        for(let n=0;n<basketService.basket.length;n++){
            if(basketService.basket[n].productId == prodId)
            {
                indexToRemove = n;
                break;
            }
        }
        basketService.basket.splice(indexToRemove,1);
        this.setBasketGross();
    }
}


export interface IProduct{
    productName:string;
    productId:number;
    productPrice:number;
    productDescription:string;
}
