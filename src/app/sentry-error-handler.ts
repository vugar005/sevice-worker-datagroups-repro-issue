import * as Sentry from "@sentry/browser";
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
if (environment.production) {
    Sentry.init({
        dsn: "https://a8e86152f6ed4e25bd846779131e5560@sentry.io/1493555"
      });
}
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(private authService: AuthService, private translateService: TranslateService) {}
  handleError(error) {
      const eventId = this.authService.getToken();
   // const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({
        eventId,
        title: this.translateService.instant('~SENTRY.feedbackTitle'),
        subtitle: this.translateService.instant('~SENTRY.feedbackSubtitle'),
        subtitle2: this.translateService.instant('~SENTRY.feedbackSubtitle2'),
        labelName: this.translateService.instant('~SENTRY.feedbackLabelName'),
        labelEmail: this.translateService.instant('~SENTRY.feedbackLabelEmail'),
        labelComments: this.translateService.instant('~SENTRY.feedbackLabelComments'),
        labelClose: this.translateService.instant('~SENTRY.feedbackLabelClose'),
        labelSubmit: this.translateService.instant('~SENTRY.feedbackLabelSubmit'),
        errorGeneric: this.translateService.instant('~SENTRY.feedbackErrorGeneric'),
        errorFormEntry: this.translateService.instant('~SENTRY.feedbackErrorFormEntry'),
        successMessage: this.translateService.instant('~SENTRY.feedbackSuccessMessage')
    });
  }
}