import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSlideComponent } from './loan-slide.component';

describe('LoanSlideComponent', () => {
  let component: LoanSlideComponent;
  let fixture: ComponentFixture<LoanSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
