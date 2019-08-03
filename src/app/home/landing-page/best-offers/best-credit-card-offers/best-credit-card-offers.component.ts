import { Component } from '@angular/core';
import { MockCreditCardOffer } from './mock-credit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { BestOffer } from '../models/best-offer.model';
import { BestOfferService } from '../best-offer.service';
@Component({
  selector: 'best-credit-card-offers',
  templateUrl: './best-credit-card-offers.component.html',
  styleUrls: ['./best-credit-card-offers.component.scss']
})
export class BestCreditCardOffersComponent{
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
    this.offers$ = this.bestOfferService.getBestOffers('CREDIT_CARD');
  }
  ngOnDestroy() {
  }
}
