import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardNumberFormatter]'
})
export class CardNumberFormatterDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    let value: string = event.target.value.replace(/\D/g, '');

    // Limit 16 digits
    value = value.substring(0, 16);

    // Insert spaces every 4 digits
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();

    event.target.value = formatted;
  }
}

