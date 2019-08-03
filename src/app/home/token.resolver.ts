import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenResolver {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}
  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Observable<string | null> {
    console.log('resolveing');
 //   return of('')
    return this.authService.getToken() ? of(null) : this.authService.fetchToken();
  }
}