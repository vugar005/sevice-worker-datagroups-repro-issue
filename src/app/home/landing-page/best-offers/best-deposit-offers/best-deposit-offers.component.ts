import { Component} from '@angular/core';
import { MockDepositOffers } from './mock-deposit-offfers';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Observable } from 'rxjs';
import { BestOffer } from '../models/best-offer.model';
import { BestOfferService } from '../best-offer.service';

@Component({
  selector: 'best-deposit-offers',
  templateUrl: './best-deposit-offers.component.html',
  styleUrls: ['./best-deposit-offers.component.scss']
})
export class BestDepositOffersComponent {
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
    this.offers$ = this.bestOfferService.getBestOffers('DEPOSIT');
  }
  ngOnDestroy() {
  }

}
