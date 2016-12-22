/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscapeComponent } from './escape.component';

describe('EscapeComponent', () => {
  let component: EscapeComponent;
  let fixture: ComponentFixture<EscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
