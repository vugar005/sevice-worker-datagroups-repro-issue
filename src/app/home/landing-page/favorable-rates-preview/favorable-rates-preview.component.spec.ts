import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorableRatesPreviewComponent } from './favorable-rates-preview.component';

describe('FavorableRatesPreviewComponent', () => {
  let component: FavorableRatesPreviewComponent;
  let fixture: ComponentFixture<FavorableRatesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorableRatesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorableRatesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
