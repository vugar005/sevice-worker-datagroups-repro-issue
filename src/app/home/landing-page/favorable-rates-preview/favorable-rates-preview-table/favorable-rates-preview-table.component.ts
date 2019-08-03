import { Component, OnInit, Input, ChangeDetectionStrategy, HostListener, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { FavorableRatePreview } from '../favorable-rate-preview.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'favorable-rates-preview-table',
  templateUrl: './favorable-rates-preview-table.component.html',
  styleUrls: ['./favorable-rates-preview-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavorableRatesPreviewTableComponent implements OnInit {
  @Input() currency: FavorableRatePreview;
  @Input() index: number;
  @HostListener('window:resize') resize() {
    this.onWindowResize();
    this.changeRef.detectChanges();
   }
  constructor(private changeRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  ngOnInit() {
  }
  get showThead(): boolean {
    if (!isPlatformBrowser(this.platformId)) {return; }
    console.log('calc th');
    const width  = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    return  (width > 768) || (width <=768 && this.index === 0);
  }
  onWindowResize() {

  }

}
