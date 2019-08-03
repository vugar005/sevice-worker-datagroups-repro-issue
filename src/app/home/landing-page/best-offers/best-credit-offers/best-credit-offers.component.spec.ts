import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCreditOffersComponent } from './best-credit-offers.component';

describe('BestCreditOffersComponent', () => {
  let component: BestCreditOffersComponent;
  let fixture: ComponentFixture<BestCreditOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCreditOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCreditOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
