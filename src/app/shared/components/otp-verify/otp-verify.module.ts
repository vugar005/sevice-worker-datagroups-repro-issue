import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpVerifyComponent } from './otp-verify.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [OtpVerifyComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [OtpVerifyComponent],
  entryComponents: [OtpVerifyComponent]
})
export class OtpVerifyModule { }
