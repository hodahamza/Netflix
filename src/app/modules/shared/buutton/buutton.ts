import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-buutton',
  imports: [],
  templateUrl: './buutton.html',
  styleUrl: './buutton.css',
})
export class Buutton {
   @Input() isLoading = false;
  @Input() disabled = false;
  @Input() buttonClass = '';  // خليها فاضية والـ user يحدد
  @Input() type: 'button' | 'submit' = 'button';
  @Input() loadingText = '';
  // @Input() navigationLink = '';
  
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.isLoading) {
      this.onClick.emit();
    }
  }
}
