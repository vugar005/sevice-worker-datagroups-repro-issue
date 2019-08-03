import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorableRatesPreviewTableComponent } from './favorable-rates-preview-table.component';

describe('FavorableRatesPreviewTableComponent', () => {
  let component: FavorableRatesPreviewTableComponent;
  let fixture: ComponentFixture<FavorableRatesPreviewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorableRatesPreviewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorableRatesPreviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
