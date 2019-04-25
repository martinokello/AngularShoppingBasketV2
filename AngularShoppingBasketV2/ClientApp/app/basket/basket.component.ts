import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {basketService, IProduct} from '../../basketServices/basketService';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers:[basketService]
})
export class BasketComponent implements OnInit {
  private _basketService:basketService;
  public basket:IProduct[];
  @Input("grossTotal") grossTotal:number;
  @Output() grossTotalChanged = new EventEmitter<number>();
  
  constructor(basketService:basketService) {
    this._basketService = basketService; 
  }
  removeFromBasket(event:Event){
    let target = event.srcElement;

    let row = target.parentElement.parentElement;

    let prodId = row.querySelector('div.first-cell').textContent;
    this._basketService.RemoveFromBasket(parseInt(prodId));
    
    this.grossTotal = this._basketService.grossTotal;
    this.grossTotalChanged.emit(this.grossTotal);
  }
  ngOnInit() {
    this.basket = basketService.basket;
    this.grossTotal = this._basketService.SumBasketGross();
  }

}
