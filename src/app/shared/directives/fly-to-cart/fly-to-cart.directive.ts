import { Directive, OnInit, Input, HostListener, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[fly-to-cart]'
})
export class FlyToCartDirective implements OnInit{
  @Input() id: number;
  @HostListener('click') click() { this.onClick()}
  constructor(private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }
  ngOnInit() {
  }
  onClick() {
    try {
      this.flyToCart();
    } catch (er) {
      console.log(er);
    }
  }
  flyToCart() {
    const cartElem = document.getElementById('compare-cart') as HTMLElement;
    var offsetLeftCart = cartElem.offsetLeft;
    var widthCart = cartElem.offsetWidth;
    const imgElem =  document.querySelector(`[product-img-id="${this.id}" ]`) as HTMLElement;
  //  const imgElem =  document.querySelector(`img[loan-img-id=${this.id}]`) as HTMLElement;
 //  const parentElem=  document.querySelector(`[loan-id="${this.id}" ]`) as HTMLElement;
    const imgClone = imgElem.cloneNode() as HTMLElement;
    imgClone.classList.add('itemaddedanimate');
    imgClone.style.height = 'auto';
    imgClone.style.width = '150px';
    imgClone.style.position = 'fixed';
    imgClone.style.top = (this.element.nativeElement as HTMLElement).getBoundingClientRect().top - 10 + 'px';
    imgClone.style.left = (this.element.nativeElement as HTMLElement).getBoundingClientRect().left + 'px';
    imgClone.style.opacity = '0.7';
    imgClone.style.zIndex = '9999';
    if (!isPlatformBrowser(this.platformId)) {return;}
    const htmlEl = document.getElementById('plus-minus');
    htmlEl.append(imgClone);

    setTimeout(() => {
      imgClone.style.height = '50px';
      imgClone.style.top = (cartElem.offsetTop) +'px';
      imgClone.style.left = cartElem.getBoundingClientRect().left + cartElem.offsetWidth/2 - 50 +'px' ;
      imgClone.style.opacity = '0.5';
    }, 500);

    setTimeout(function () {
      imgClone.style.height = '0';
      imgClone.style.opacity = '0.5';
      cartElem.classList.add('shakeit');
    }, 1000);
    setTimeout(function () {
      cartElem.classList.remove('shakeit');
     imgClone.remove();
    }, 1500);
  }

}
