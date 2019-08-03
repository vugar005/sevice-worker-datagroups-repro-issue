import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BestOffer } from '../../models/best-offer.model';

@Component({
  selector: 'credit-offer-card',
  templateUrl: './credit-offer-card.component.html',
  styleUrls: ['./credit-offer-card.component.scss']
})
export class CreditOfferCardComponent implements OnInit {
  @Input() offer: BestOffer;
  lang: string;
  constructor(private translateService: TranslateService) {
      this.lang = this.translateService.getDefaultLang();
     this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
   }

  ngOnInit() {
  }


}
