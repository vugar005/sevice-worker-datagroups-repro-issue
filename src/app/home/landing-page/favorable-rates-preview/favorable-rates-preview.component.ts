import { HomeService } from './../../home.service';
import { Component, OnInit } from '@angular/core';
import {MockFavorableRates} from './mock--favorable-rates';
import {FavorableRatePreview} from './favorable-rate-preview.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'favorable-rates-preview',
  templateUrl: './favorable-rates-preview.component.html',
  styleUrls: ['./favorable-rates-preview.component.scss']
})
export class FavorableRatesPreviewComponent implements OnInit {
  rates: FavorableRatePreview[];
  constructor(private homeService: HomeService) {
    this.homeService.getcurrBestRateList().subscribe(res => {
      this.rates = res;
    });
  }

  ngOnInit() {
  }

}
