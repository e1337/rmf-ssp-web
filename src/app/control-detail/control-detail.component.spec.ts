import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDetailComponent } from './control-detail.component';

describe('ControlDetailComponent', () => {
  let component: ControlDetailComponent;
  let fixture: ComponentFixture<ControlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
