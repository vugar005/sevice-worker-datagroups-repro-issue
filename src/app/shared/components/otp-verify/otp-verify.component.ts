import { Component, OnInit, ViewChild, Input, Output, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { SharedService } from '../../shared.service';
import { TranslateService } from '@ngx-translate/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpResponseEnum } from '../../enums/http-response.enum';
import { timer, Subject } from 'rxjs';

@Component({
  selector: 'otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) form: NgForm;
  loading: boolean;
  @ViewChild('firstField', { static: true }) firstField: MatInput;
  otpError: boolean;
  canResendOtp: boolean;
  resendTimerInterval = 100;
  resendLeftTime = this.resendTimerInterval + 1;
  _onDestroy$ = new Subject<void>();
  constructor(
    private sharedService: SharedService,
     private translateService: TranslateService,
     private dialogRef: MatDialogRef<OtpVerifyComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
     ) { }

  ngOnInit() {
    this.initTimer();
    this.sendOtp();
    setTimeout(() => {
    this.firstField.focus();
    }, 300);
  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
  }
  initTimer() {
    const source = timer(1000, 1000)
    .pipe(takeUntil(this._onDestroy$));
  const subscription =  source.subscribe(res => {
      this.resendLeftTime = this.resendLeftTime - 1;
      if (res >= this.resendTimerInterval) {
        subscription.unsubscribe();
        this.canResendOtp = true;
      }
    })
  }

  sendOtp() {
    this.canResendOtp = false;
    const otpObject = this.data.otpObject;
    if (!otpObject) {return; }
    this.sharedService.sendOtp(otpObject)
    .subscribe();
  }

  onSubmit() {
    if (!this.form.valid) {return;}
    if (!(this.data && this.data.otpObject && this.data.otpObject.gsm)) {return;}
    this.loading = true;
    const otpCode = Object.values(this.form.value).join('');
    const newFormValue = {
      gsm: this.data.otpObject.gsm,
      otp: otpCode
    };
    console.log(newFormValue);
    this.sharedService.checkOTP(newFormValue)
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(res => {
      console.log(res)
      if (res && (res.success === HttpResponseEnum.success)) {
        this.dialogRef.close(res);
      } else if (res && (res.errorText === 'OTP not allowed')){
        this.firstField.focus();
        this.otpError = true;
      } else {
        this.dialogRef.close();
      }
    })
  }
  onKeyUp(controlKey: string,  nextInput: MatInput | MatButton, e) {
    const value = e.target.value;
    const replacedValue = value.replace(/[^\d]/,'');
    if (replacedValue) {
      this.form.controls[controlKey].setValue(replacedValue);
      nextInput.focus();
    } else {
      this.form.controls[controlKey].setValue('');
    }
  }
  onFocus(controlKey: string) {
      this.form.controls[controlKey].setValue('');
  }
  getErrorMessage(controlKey: string) {
    return this.form.controls[controlKey].hasError('required') ?
    this.translateService.instant('~requiredField') : '';
  }
  onCodeInput(controlKey: string, e: any) {
    const value = e.target.value;
    this.form.controls[controlKey].setValue(value.replace(/[^\d]/,''));
  }
  onStepBack() {
    this.dialogRef.close();
  }


}
