import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from 'src/app/models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { BestOffer } from './models/best-offer.model';

@Injectable({
  providedIn: 'root'
})
export class BestOfferService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getBestOffers(offerType: string): Observable<BestOffer[] >{
      return this.http.post<DataResponse>('mybank/bestOffers', {
          token: this.authService.getToken(),
          offerType: offerType
      }).pipe(
          map(res => res && res.data),
          catchError(er => of(null))
      );
  }
}
