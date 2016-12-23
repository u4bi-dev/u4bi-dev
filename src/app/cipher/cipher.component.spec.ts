/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CipherComponent } from './cipher.component';

describe('CipherComponent', () => {
  let component: CipherComponent;
  let fixture: ComponentFixture<CipherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CipherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
