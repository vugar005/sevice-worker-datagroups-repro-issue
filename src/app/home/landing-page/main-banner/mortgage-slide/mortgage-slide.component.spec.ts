import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageSlideComponent } from './mortgage-slide.component';

describe('MortgageSlideComponent', () => {
  let component: MortgageSlideComponent;
  let fixture: ComponentFixture<MortgageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
