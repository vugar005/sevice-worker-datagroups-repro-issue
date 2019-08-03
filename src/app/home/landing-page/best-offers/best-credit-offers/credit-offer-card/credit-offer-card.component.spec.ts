import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOfferCardComponent } from './credit-offer-card.component';

describe('CreditOfferCardComponent', () => {
  let component: CreditOfferCardComponent;
  let fixture: ComponentFixture<CreditOfferCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditOfferCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
