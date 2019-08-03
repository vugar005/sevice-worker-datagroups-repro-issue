import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardOfferCardComponent } from './credit-card-offer-card.component';

describe('CreditCardOfferCardComponent', () => {
  let component: CreditCardOfferCardComponent;
  let fixture: ComponentFixture<CreditCardOfferCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardOfferCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
