/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverComponent } from './over.component';

describe('OverComponent', () => {
  let component: OverComponent;
  let fixture: ComponentFixture<OverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
