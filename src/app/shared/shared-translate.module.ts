import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ValueTranslateModule } from './pipes/value-translate/value-translate.module';
export function HttpLoaderFactory(http: HttpClient) {
  const link =  './assets/i18n/';
  return new TranslateHttpLoader(http, link, '.json');
}
@NgModule({
 imports: [
   ValueTranslateModule,
  TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
 ],
 exports: [TranslateModule, ValueTranslateModule]
}
)
export class SharedTranslateModule {}

