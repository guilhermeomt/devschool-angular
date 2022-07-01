import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]',
})
export class BlueDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'blue';
  }
}
