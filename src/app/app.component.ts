import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_KEY, DEFAULT_LANG, isTestMode } from './app.utils';
import { Router } from '@angular/router';
import { SharedService } from './shared/shared.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'plus-minus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object,
     private router: Router) {
    this.setDefaultLang();
  //  this.detectBrowser();
  }

  isTestMode() {
    return isTestMode();
  }
  setDefaultLang() {
    if (isPlatformBrowser(this.platformId)) {
      const language = localStorage.getItem(`${APP_KEY}_language`) || DEFAULT_LANG;
      this.translateService.setDefaultLang(language);
    }
  };
}
