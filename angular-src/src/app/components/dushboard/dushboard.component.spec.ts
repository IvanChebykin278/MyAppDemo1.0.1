/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DushboardComponent } from './dushboard.component';

describe('DushboardComponent', () => {
  let component: DushboardComponent;
  let fixture: ComponentFixture<DushboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DushboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DushboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
