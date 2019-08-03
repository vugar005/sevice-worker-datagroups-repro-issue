import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getBaseUrl } from 'src/app/app.utils';

@Pipe({
  name: 'imgSrc',
  pure: false
})
export class ImgSrcPipe implements PipeTransform {
  hostname: string;
  constructor(private authService: AuthService, private sanitizer: DomSanitizer) {
  }

  transform(fileId: string): string {
    if (!fileId) {return;}
    return `${getBaseUrl()}/mybank/getFileById/${fileId}/${this.authService.getToken()}`;
  }
}
