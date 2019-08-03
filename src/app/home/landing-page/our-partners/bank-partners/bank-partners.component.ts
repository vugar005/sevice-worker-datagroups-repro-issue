import { HomeService } from './../../../home.service';
import { Component, OnInit } from '@angular/core';
import {BankPartner} from './bank-partner.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'bank-partners',
  templateUrl: './bank-partners.component.html',
  styleUrls: ['./bank-partners.component.scss']
})
export class BankPartnersComponent implements OnInit {
  partners$: Observable<BankPartner[]>;
  mockPartner: BankPartner = {
    bankID: 1,
    bankWebSite: 'http://www.azerturkbank.az'
  }
  constructor(private homeService: HomeService) {
    this.partners$ = this.homeService.getBankList(true)
                      .pipe(map((banks: BankPartner[]) =>
                       banks && banks.filter(bank => bank.bankID === 1 ||
                         bank.bankID === 12 ||
                         bank.bankID === 16 ||
                         bank.bankID === 8
                         ) ));
  }

  ngOnInit() {
  }


}
