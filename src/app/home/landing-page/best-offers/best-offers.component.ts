import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
@Component({
  selector: 'best-offers',
  templateUrl: './best-offers.component.html',
  styleUrls: ['./best-offers.component.scss']
})
export class BestOffersComponent implements OnInit {
  tabsCount = 5;
  selectedTabIndex = 0;
  _onDestroy$ = new Subject<void>();
  constructor() { }

  ngOnInit() {
 //   this.startSlide();
  }
  startSlide() {
    interval(6000)
    .pipe(
      takeUntil(this._onDestroy$),
      tap(res => {
        if (this.selectedTabIndex + 1 < this.tabsCount) {
          this.selectedTabIndex +=1;
        } else {
          this.selectedTabIndex = 0;
        }
      })
    ).subscribe();
  }
  onDestroy() {
    this._onDestroy$.next();
  }
}
