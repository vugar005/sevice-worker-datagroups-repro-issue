import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDebitCardOffersComponent } from './best-debit-card-offers.component';

describe('BestDebitCardOffersComponent', () => {
  let component: BestDebitCardOffersComponent;
  let fixture: ComponentFixture<BestDebitCardOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestDebitCardOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDebitCardOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
