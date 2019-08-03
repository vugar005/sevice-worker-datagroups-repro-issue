import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SlideModel } from '../slide.model';
import { MatDialog } from '@angular/material/dialog';
import { isMobileSize } from 'src/app/app.utils';
import Typed from 'typed.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loan-slide',
  templateUrl: './loan-slide.component.html',
  styleUrls: ['./loan-slide.component.scss']
})
export class LoanSlideComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('shortInfo', { static: false }) shortInfo: ElementRef;
  @Input() slide: SlideModel;
  typed: any;
  constructor(private dialog: MatDialog, private translateService: TranslateService) { }

  ngOnInit() { }
  onRequestLoansFromAllBanks() {
    return;
  }
  ngAfterViewInit() {
   // this.startTypedJs();
  }
  startTypedJs() {
    const options = {
      strings: [
        this.translateService.instant('~selectCreditsShortInfo'),
        this.translateService.instant('~selectCreditsShortInfoSecond')],
      typeSpeed: 40,
      starDelay: 200,
      backSpeed: 10,
      loop:true,
      loopCount: 2,
      showCursor: false,
      smartBackspace: true
    }
    this.typed = new Typed("#slideLoanShortInfo", options);
  }
  ngOnDestroy() {
 //   this.typed.destroy();
  }
}
