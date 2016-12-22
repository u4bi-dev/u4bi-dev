/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LectureComponent } from './lecture.component';

describe('LectureComponent', () => {
  let component: LectureComponent;
  let fixture: ComponentFixture<LectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
