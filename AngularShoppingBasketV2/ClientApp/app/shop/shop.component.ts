import { Component, OnInit,ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { basketService,IProduct } from '../../basketServices/basketService';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[basketService]
})
export class ShopComponent implements OnInit {
  public shop:IProduct[];
  public _basketService:basketService;
  @Input("grossTotal") grossTotal:number;
  @Output() grossTotalChanged = new EventEmitter<number>();
  
  constructor(basketService:basketService) {
    this._basketService = basketService;
   }
   public addToBasket(event: Event):void{
    let target = event.srcElement;

    let row = target.parentElement.parentElement;
    let prodId = row.querySelector('div.first-cell').textContent;
    this._basketService.AddProductToBasket(parseInt(prodId));
    let total = this._basketService.grossTotal;
       this.grossTotalChanged.emit(total);
   }
  ngOnInit() {
    this.shop = this._basketService.GetAllShopProducts();
    this.grossTotal = this._basketService.SumBasketGross();
  }

}
