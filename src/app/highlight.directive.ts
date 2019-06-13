import {   Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[ggHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  highlighterElement() {
    this.el.nativeElement.style.color = '#222';  
    this.el.nativeElement.style.fontWeight = '600';  
  } 
  
  ngOnInit() {
    this.highlighterElement();
  }
}