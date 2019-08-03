import {
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
  } from '@angular/common/http';
  import { Observable } from 'rxjs/internal/Observable';
  import {catchError,  map } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { throwError, } from 'rxjs';
  import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private sharedService: SharedService,
       private translateService: TranslateService,
       private router: Router
       ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
      return next.handle(req).pipe(
        catchError((er: HttpErrorResponse) => {
          console.log(er);
         return this.handleCatchError(er);
        }),
        map(
          response => {
            if (response instanceof HttpResponse) {
              if (response.body && response.body.success === 'false') {
                switch (response.body.errorText) {
                  case 'Access denied':
                    this.router.url.includes('bank-admin') ?
                     this.router.navigateByUrl('/home/bank-admin/login') : this.router.navigateByUrl('/admin/login')  ;
                    default:
                    this.handleError(response.body.errorText);
                    throwError(response.body.errorText);
                }

              } else {
                return response;
              }
          } else {
            return response;
          }
        }
        )
      );
    }
    handleError(msg = `${this.translateService.instant('~somethingWentWrong')} !`): void {
      this.sharedService.createNotification(msg, 'error', 'error');
    }
    handleCatchError(err: HttpErrorResponse) {
      console.log(err);
      const errMsg = err.error && err.error[0] || this.translateService.instant('~somethingWentWrong');
      this.sharedService.createNotification(errMsg, 'error', 'error');
      return throwError(err);
    }
  }
