import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {

  @Input('appFoo') public set color(val: string) {
    this.el.nativeElement.style.color = val;
  }

  constructor(private el: ElementRef) {
   }

}
