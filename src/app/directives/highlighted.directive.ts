import { Directive } from '@angular/core';

@Directive({
  //attribute directives, applied to all tag that
  //have this word  
  selector: '[highlighted]'
})
export class HighlightedDirective {

  constructor() { 
    console.log("Directive created")
  }

}
