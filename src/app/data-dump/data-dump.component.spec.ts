/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataDumpComponent } from './data-dump.component';

describe('DataDumpComponent', () => {
  let component: DataDumpComponent;
  let fixture: ComponentFixture<DataDumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
