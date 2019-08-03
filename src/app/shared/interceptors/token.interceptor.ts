import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { mergeMap, shareReplay, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    fetchToken$ = this.authService.fetchToken().pipe(
      shareReplay(1),
      catchError(er => {
     //   this.router.navigateByUrl('error-page');
         return of(er);
      })
      );
  constructor(private authService: AuthService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('mybank/getSessionId')) { return next.handle(request); }
    if (request.url.includes('.json')) { return next.handle(request); }

      return this.fetchToken$
      .pipe(
          mergeMap((token) => {
            const authReq =  request.clone({
                body: {
                    ...request.body,
                    token: token
                }
            });
            return next.handle(authReq);
          } )
          );
  }
}