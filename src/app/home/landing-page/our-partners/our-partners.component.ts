import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent implements OnInit {
  tabsCount = 5;
  selectedTabIndex = 0;
  _onDestroy$ = new Subject<void>();
  constructor() { }

  ngOnInit() {
  }

}
