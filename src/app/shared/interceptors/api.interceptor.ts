import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/app/app.utils';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const hostname = getBaseUrl();
    if (req.url.includes('.json')) { return next.handle(req); }
     if (req.url.includes('.svg')) { return next.handle(req); }
    const apiReq = req.clone({ url: `${hostname}/${req.url}` });
    return next.handle(apiReq);
  }
}