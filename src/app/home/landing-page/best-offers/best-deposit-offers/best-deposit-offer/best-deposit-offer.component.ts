import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'best-deposit-offer',
  templateUrl: './best-deposit-offer.component.html',
  styleUrls: ['./best-deposit-offer.component.scss']
})
export class BestDepositOfferComponent {
  @Input() offer: any;
  lang: string;
  constructor(private translateService: TranslateService) {
      this.lang = this.translateService.getDefaultLang();
     this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
   }

}
