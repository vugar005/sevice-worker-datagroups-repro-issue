import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDepositOfferComponent } from './best-deposit-offer.component';

describe('BestDepositOfferComponent', () => {
  let component: BestDepositOfferComponent;
  let fixture: ComponentFixture<BestDepositOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDepositOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDepositOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
