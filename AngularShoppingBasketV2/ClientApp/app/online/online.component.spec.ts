/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnlineComponent } from './online.component';

describe('ShopComponent', () => {
    let component: OnlineComponent;
    let fixture: ComponentFixture<OnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [OnlineComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(OnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
