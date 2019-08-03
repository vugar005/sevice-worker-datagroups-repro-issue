import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPartnersComponent } from './bank-partners.component';

describe('BankPartnersComponent', () => {
  let component: BankPartnersComponent;
  let fixture: ComponentFixture<BankPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
