import { Component, OnInit, Input } from '@angular/core';
import { BankPartner } from '../bank-partner.model';

@Component({
  selector: 'bank-partner-card',
  templateUrl: './bank-partner-card.component.html',
  styleUrls: ['./bank-partner-card.component.scss']
})
export class BankPartnerCardComponent implements OnInit {
  @Input() partner: BankPartner;
  constructor() { }

  ngOnInit() {
  }

}
