import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SortChangeModel } from './directives/order-by-column/sort-change.model';
import { SortStates } from './directives/order-by-column/sort-states.enum';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { SelectType } from './models/select-type.model';
import { DataResponse } from '../models/data-reponse';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  lang$ = new Subject<string>();
  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
     private authService: AuthService,
     private snackBar: MatSnackBar
     ) {
       this.translateService.onDefaultLangChange.subscribe(res => this.lang$.next(res.lang));
      }

  filterTableWithRowGroups(filterValue: string, data: any, columnNames: string[]) {
    const lang = this.translateService.getDefaultLang();
    return  [...data].map(group => {
      return {
        ...group,
        list: [...group.list].filter((item) => {
          return Object.keys(item).some(key => {
       //     console.log(Object.keys(columnNames))
            if (!Object.keys(columnNames).find(colKey => columnNames[colKey] === key)) {return false;}
            if (item[key] && item[key][lang]) {
              return !!(item[key][lang].toString().toLowerCase().includes(filterValue));
            } else {
              return !!(item[key] && item[key].toString().toLowerCase().includes(filterValue));
            }
          })
        })
      }
    });
  }
  sortTableWithRowGroups(sortChange: SortChangeModel, data: any) {
    const originalData = [...data];
   const  isAcending = sortChange.orderBySort === SortStates.asc ? 1 : -1;
       originalData.forEach(group => {
        group.list = [...group.list].sort((a, b) => {
          if (a[sortChange.orderByColumn] > b[sortChange.orderByColumn]) { return isAcending}
          if (a[sortChange.orderByColumn] < b[sortChange.orderByColumn]) { return -isAcending; }
          return 0;
        })
    })
    if (sortChange.orderBySort === SortStates.asc) {
     return  originalData.sort((a, b) => {
        if (a.list[0][sortChange.orderByColumn] > b.list[0][sortChange.orderByColumn]) { return 1; }
        if (a.list[0][sortChange.orderByColumn] < b.list[0][sortChange.orderByColumn]) { return -1; }
        return 0;
      });
    } else if (sortChange.orderBySort === SortStates.desc) {
     return  originalData.sort((a, b) => {
        if (a.list[0][sortChange.orderByColumn] > b.list[0][sortChange.orderByColumn]) { return -1; }
        if (a.list[0][sortChange.orderByColumn] < b.list[0][sortChange.orderByColumn]) { return 1; }
        return 0;
      });
    } else {
     return  data;
    }
  }
  getCurrCodeList(pageName: string): Observable<SelectType[]> {
    return this.http.post<DataResponse>('mybank/currCodeList', {
      token: this.authService.getToken(),
      pageName: pageName
  }).pipe(
      map(res => res && res.data && this.mapCurrCodeList(res.data[0])),
      catchError(er => of(null))
  );
  }
  private mapCurrCodeList(data: any): SelectType[] {
    if (!data.currencyCode) {return;}
    return data.currencyCode.map(cur => {
      return {
        value: cur,
        label: cur
      } as SelectType
    })
  }
  private mapPeriodList(data: any): SelectType[] {
    return data.map(cur => {
      return {
        value: cur.periodId.toString(),
        label: cur.period
      } as SelectType
    })
  }
  getCardPeriodList(cardType: string) {
    return this.http.post<DataResponse>('mybank/listCardPeriod', {
      token: this.authService.getToken(),
      cardType: cardType
  }).pipe(
      map(res => res && res.data && this.mapPeriodList(res.data)),
      catchError(er => of(null))
  );
  }
  getPeriodCodeList(pageName: string): Observable<SelectType[]> {
    return this.http.post<DataResponse>('mybank/currCodeList', {
      token: this.authService.getToken(),
      pageName: pageName
  }).pipe(
      map(res => res && res.data && this.mapCurrCodeList(res.data[0])),
      catchError(er => of(null))
  );
  }

  createNotification(message: string, actionMessage: string, type: string,
    duration = 5000,
    verticalPosition: MatSnackBarVerticalPosition = 'bottom',
    horizontalPosition: MatSnackBarHorizontalPosition = 'center'
    ) {
    this.snackBar.open(message, actionMessage, {
      duration,
      verticalPosition,
      horizontalPosition,
      panelClass: [`snackbar-${type}`]
    });
  }

  sendOtp(formValue:Object):Observable<DataResponse> {
    return this.http.post<DataResponse>('mybank/sendOTP', {
        token: this.authService.getToken(),
        ...formValue
    })
    .pipe(
        catchError(er => of(null))
    );
}

  checkOTP(formValue: Object):Observable<DataResponse> {
    return this.http.post<DataResponse>('mybank/checkOTP', {
        token: this.authService.getToken(),
        ...formValue
    }).pipe(
        catchError(er => of(null))
    );;
}
  getLang() {
    return this.lang$.asObservable();
  }
}
