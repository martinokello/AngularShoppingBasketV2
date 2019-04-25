import { Component, OnInit,ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'online-shop',
    templateUrl: './online.component.html',
    styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
    grossTotal: number;

    public totalChanged($event: number): void {
        this.grossTotal = $event;
    }

    ngOnInit(): void {

        this.grossTotal = 0.00;
    }
}
