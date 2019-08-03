import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDepositOffersComponent } from './best-deposit-offers.component';

describe('BestDepositOffersComponent', () => {
  let component: BestDepositOffersComponent;
  let fixture: ComponentFixture<BestDepositOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDepositOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDepositOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
