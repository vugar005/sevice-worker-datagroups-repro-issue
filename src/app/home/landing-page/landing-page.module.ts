import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SharedTranslateModule } from 'src/app/shared/shared-translate.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { LandingPageRoutingModule } from './landing-page.routing';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServiceCardComponent } from './our-services/service-card/service-card.component';
import { BestOffersComponent } from './best-offers/best-offers.component';
import { BestDepositOffersComponent } from './best-offers/best-deposit-offers/best-deposit-offers.component';
import { BestDepositOfferComponent } from './best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component';
import { BestCreditOffersComponent } from './best-offers/best-credit-offers/best-credit-offers.component';
import { CreditOfferCardComponent } from './best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { BankPartnersComponent } from './our-partners/bank-partners/bank-partners.component';
import { BankPartnerCardComponent } from './our-partners/bank-partners/bank-partner-card/bank-partner-card.component';
import { FavorableRatesPreviewComponent } from './favorable-rates-preview/favorable-rates-preview.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FavorableRatesPreviewTableModule } from './favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module';
import { BestCreditCardOffersComponent } from './best-offers/best-credit-card-offers/best-credit-card-offers.component';
import { CreditCardOfferCardComponent } from './best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component';
import { BestDebitCardOffersComponent } from './best-offers/best-debit-card-offers/best-debit-card-offers.component';
import { DebitCardOfferCardComponent } from './best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component';
import { LoanSlideComponent } from './main-banner/loan-slide/loan-slide.component';
import { MortgageSlideComponent } from './main-banner/mortgage-slide/mortgage-slide.component';
import { MatButtonModule, MatTabsModule } from '@angular/material';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    LandingPageComponent,
    MainBannerComponent,
    OurServicesComponent,
    ServiceCardComponent,
    BestOffersComponent,
    BestDepositOffersComponent,
    BestDepositOfferComponent,
    BestCreditOffersComponent,
    CreditOfferCardComponent,
    OurPartnersComponent,
    BankPartnersComponent,
    BankPartnerCardComponent,
    FavorableRatesPreviewComponent,
    BestCreditCardOffersComponent,
    CreditCardOfferCardComponent,
    BestDebitCardOffersComponent,
    DebitCardOfferCardComponent,
    LoanSlideComponent,
    MortgageSlideComponent,
  ],
  imports: [
    CommonModule,
    SharedTranslateModule,

    MatButtonModule,
    MatTabsModule,

    LandingPageRoutingModule,
    SwiperModule,
    FavorableRatesPreviewTableModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class LandingPageModule {}
