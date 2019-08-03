import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitCardOfferCardComponent } from './debit-card-offer-card.component';

describe('DebitCardOfferCardComponent', () => {
  let component: DebitCardOfferCardComponent;
  let fixture: ComponentFixture<DebitCardOfferCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardOfferCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
