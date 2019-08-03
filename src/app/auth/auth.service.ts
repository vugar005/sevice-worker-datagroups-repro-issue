import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { DataResponse } from '../models/data-reponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) { }
  getToken(): string {
    return this.token;
  }
  fetchToken(): Observable<string> {
    return this.http.post<DataResponse>('mybank/getSessionId', {})
    .pipe(map(res => {
      this.token = res && res.data;
      return this.token;
    }
    ),
  //  tap(res => console.log(res))
    )
  }
}
