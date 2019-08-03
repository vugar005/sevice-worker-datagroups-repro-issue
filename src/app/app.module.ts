import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule,  HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import localeRu from '@angular/common/locales/ru';
import localeAz from '@angular/common/locales/az';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu);
registerLocaleData(localeAz);
registerLocaleData(localeFr);
export function HttpLoaderFactory(http: HttpClient) {
  const link = './assets/i18n/';
  return new TranslateHttpLoader(http, link, `.json?random=${Math.random() * 100}`);
}
import { TokenResolver } from './home/token.resolver';
import { APIInterceptor } from './shared/interceptors/api.interceptor';

import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HoverClassModule } from './shared/directives/hover-class/hover-class.module';
import { ValueTranslateModule } from './shared/pipes/value-translate/value-translate.module';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';
import { SupportedBrowserCardComponent } from './unsupported-browser/supported-browser-card/supported-browser-card.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { MatButtonModule, MatMenuModule, MatBadgeModule, MatIconModule} from '@angular/material';
import { AppPreloadingStrategy } from './app-preloading';
import { SentryErrorHandler } from './sentry-error-handler';
import { ImgSrcPipeModule } from './shared/pipes/img-src-pipe.module';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { CustomReuseStrategy } from './custom-router-reuse-strategy';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    NotFoundComponent,
    UnsupportedBrowserComponent,
    SupportedBrowserCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ImgSrcPipeModule,

    MatBadgeModule,
    MatIconModule,
    MaterialModule,
    FormsModule,
    ValueTranslateModule,
    HoverClassModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }),
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    TokenResolver,
    AppPreloadingStrategy,
   { provide: ErrorHandler, useClass: SentryErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
   {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // { provide: LOCALE_ID,
    //   deps: [TranslateService],
    //   useFactory: (service) => service.getDefaultLang()
    // },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
