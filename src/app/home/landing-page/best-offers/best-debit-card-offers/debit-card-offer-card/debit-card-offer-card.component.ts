import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BestOffer } from '../../models/best-offer.model';

@Component({
  selector: 'debit-card-offer-card',
  templateUrl: './debit-card-offer-card.component.html',
  styleUrls: ['./debit-card-offer-card.component.scss']
})
export class DebitCardOfferCardComponent implements OnInit {

  @Input() offer: BestOffer;
  lang: string;
  constructor(private translateService: TranslateService) {
      this.lang = this.translateService.getDefaultLang();
     this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
   }

  ngOnInit() {
  }

}
