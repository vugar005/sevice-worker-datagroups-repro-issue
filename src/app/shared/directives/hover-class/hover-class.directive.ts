import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[hoverClass]'
})
export class HoverClassDirective {
  @HostListener('mouseenter') onHover() {this.onMouseEnter()}
  @HostListener('mouseleave') onUnHover() {this.onMouseLeave()}
  @Input() hoverClass: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, this.hoverClass);
  }
  onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, this.hoverClass);
  }
}
