import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  //attribute directives, applied to all tag that
  //have this word  
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() { 
    console.log("Directive created")
  }

  // @HostBinding('className')
  // get cssClasses(){
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

}
