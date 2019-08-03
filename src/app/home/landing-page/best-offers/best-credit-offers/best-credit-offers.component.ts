import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MockCreditOffers } from './mock-credit-offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BestOfferService } from '../best-offer.service';
import { Observable } from 'rxjs';
import { BestOffer } from '../models/best-offer.model';
declare var Swiper;
@Component({
  selector: 'best-credit-offers',
  templateUrl: './best-credit-offers.component.html',
  styleUrls: ['./best-credit-offers.component.scss']
})
export class BestCreditOffersComponent implements OnInit, OnDestroy {
  offers$: Observable<BestOffer[]>;
  swiper: any;
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: { el: '.swiper-pagination', clickable: true }
  };
  constructor(private bestOfferService: BestOfferService) {}

  ngOnInit() {
    this.offers$ = this.bestOfferService.getBestOffers('LOAN');
  }
  ngOnDestroy() {
  }

}
