import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedBrowserCardComponent } from './supported-browser-card.component';

describe('SupportedBrowserCardComponent', () => {
  let component: SupportedBrowserCardComponent;
  let fixture: ComponentFixture<SupportedBrowserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportedBrowserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedBrowserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
