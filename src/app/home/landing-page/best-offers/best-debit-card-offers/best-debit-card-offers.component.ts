import { Component} from '@angular/core';
import { MockDebitCardOffer } from './mock-debit-card.offer';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { BestOffer } from '../models/best-offer.model';
import { BestOfferService } from '../best-offer.service';
@Component({
  selector: 'best-debit-card-offers',
  templateUrl: './best-debit-card-offers.component.html',
  styleUrls: ['./best-debit-card-offers.component.scss']
})
export class BestDebitCardOffersComponent {
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
    this.offers$ = this.bestOfferService.getBestOffers('DEBET_CARD');
  }
  ngOnDestroy() {
  }

}
