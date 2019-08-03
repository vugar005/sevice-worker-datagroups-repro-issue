import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[read-more]',
  exportAs: 'readMore'
})
export class ReadMoreDirective {
  @HostListener('click') click() {this.onClick()}
  expanded = false;
  constructor() { }
  onClick() {
    this.expanded = !this.expanded;
  }
}
