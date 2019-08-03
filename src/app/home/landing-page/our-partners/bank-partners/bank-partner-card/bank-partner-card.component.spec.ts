import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPartnerCardComponent } from './bank-partner-card.component';

describe('BankPartnerCardComponent', () => {
  let component: BankPartnerCardComponent;
  let fixture: ComponentFixture<BankPartnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPartnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPartnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
