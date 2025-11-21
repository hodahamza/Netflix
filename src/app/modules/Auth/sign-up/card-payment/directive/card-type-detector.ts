import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardTypeDetector]'
})
export class CardTypeDetectorDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value.replace(/\s+/g, '');

    let type = '';

    if (/^4/.test(value)) {
      type = 'visa';
    } else if (/^5[1-5]/.test(value)) {
      type = 'mastercard';
    } else if (/^3[47]/.test(value)) {
      type = 'amex';
    } else if (/^6(?:011|5)/.test(value)) {
      type = 'discover';
    } else {
      type = '';
    }

    this.renderer.setAttribute(this.el.nativeElement, 'data-card-type', type);
  }
}