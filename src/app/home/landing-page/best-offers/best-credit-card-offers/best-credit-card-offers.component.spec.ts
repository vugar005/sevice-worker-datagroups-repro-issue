import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCreditCardOffersComponent } from './best-credit-card-offers.component';

describe('BestCreditCardOffersComponent', () => {
  let component: BestCreditCardOffersComponent;
  let fixture: ComponentFixture<BestCreditCardOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCreditCardOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCreditCardOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
