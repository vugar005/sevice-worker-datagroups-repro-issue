import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.scss']
})
export class ButtonToggleGroupComponent implements OnInit {
  @ViewChild('componentContent', {static: false}) content: ElementRef;
  constructor() { }

  ngOnInit() {
  }
 get isOverflown() {
   if (!this.content) {return;}
    return  this.content.nativeElement.scrollWidth > this.content.nativeElement.clientWidth;
}
  onNext() {
    try {
      const el = this.content.nativeElement;
      el.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
    } catch(er) {
      console.log(er);
    } finally {
    //  this.changeRef.detectChanges();
    }
  }
  onPrev() {
    try {
      const el = this.content.nativeElement;
      el.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
    } catch(er) {
      console.log(er);
    } finally {
    //  this.changeRef.detectChanges();
    }
  }


}
