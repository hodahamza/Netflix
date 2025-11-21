import { Component, inject, OnInit, signal } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CardNumberFormatterDirective } from "./directive/card-number-formatter";

import {
  digitsOnlyValidator,
  cardLengthValidator,
  luhnValidator,
  expirationValidator
} from "./custom-validators/card-validators";
import { Buutton } from "../../../shared/buutton/buutton";
@Component({
  selector: "lib-cardpayment.component",
  imports: [RouterLink, ReactiveFormsModule, CardNumberFormatterDirective, Buutton],
  templateUrl: "./cardpayment.component.html",
  styleUrls: ["./cardpayment.component.css"], // صححتها
})
export class CardpaymentComponent implements OnInit {
onStartMemberShip() {
throw new Error('Method not implemented.');
}

  cardPaymentForm!: FormGroup;
  cardType: 'visa' | 'mastercard' | 'unknown' = 'unknown';

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.cardPaymentForm = this.fb.group({
      cardNumber: ["", [Validators.required, digitsOnlyValidator, cardLengthValidator, luhnValidator]],
      expDate: ["", [Validators.required, expirationValidator]],
      cvv: ["", [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]],
      name: ["", [Validators.required, Validators.minLength(3)]],
      agree: [false, Validators.requiredTrue],
    });

    this.cardPaymentForm.get('cardNumber')?.valueChanges.subscribe(value => {
      this.cardType = this.detectCardType(value);
    });
  }

  

  detectCardType(cardNumber: string): 'visa' | 'mastercard' | 'unknown' {
    const clean = (cardNumber || "").replace(/\s+/g, "");
    if (/^4[0-9]{0,}$/.test(clean)) return 'visa';
    if (/^5[1-5][0-9]{0,}$/.test(clean)) return 'mastercard';
    return 'unknown';
  }
 get cardTypeIcon(): string {
    if (this.cardType === 'visa') return 'https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png';
    if (this.cardType === 'mastercard') return 'https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png';
    return '';
  }
    isloading = signal<boolean>(false);
  isDisabled = signal<boolean>(false);


  submit() {
    if (this.cardPaymentForm.invalid) {
      this.cardPaymentForm.markAllAsTouched();
      return;
    }
    console.log("Form Submitted:", this.cardPaymentForm.value);
  }
  
}
