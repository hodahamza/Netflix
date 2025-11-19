
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CardNumberFormatterDirective } from "./card-number-formatter";


@Component({
  selector: "lib-cardpayment.component",
  imports: [RouterLink , ReactiveFormsModule ,CardNumberFormatterDirective ],
  templateUrl: "./cardpayment.component.html",
  styleUrl: "./cardpayment.component.css",
})
export class CardpaymentComponent implements OnInit {

  cardPaymentForm!: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.cardPaymentForm = this.fb.group({
     cardNumber: [
  "",
  [
    Validators.required,
    (control: { value: string }) => {
      const clean = control.value.replace(/\s/g, "");

      if (!/^[0-9]+$/.test(clean)) {
        return { invalidCard: true }; // لو فيه حروف
      }

      if (clean.length !== 16) {
        return { invalidLength: true }; // الرقم لازم يكون 16 رقم
      }

      return null; // تمام
    }
  ]
],
     expDate: [
  "",
  [
    Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/), // MM/YY
    (control: { value: string }) => {
      if (!control.value) return null;

      const [monthStr, yearStr] = control.value.split("/");
      if (!monthStr || !yearStr) return null;

      const month = +monthStr;
      const year = +("20" + yearStr); // تحويل YY إلى YYYY

      const now = new Date();
      const currentMonth = now.getMonth() + 1;
      const currentYear = now.getFullYear();

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return { expired: true }; // تاريخ في الماضي
      }

      return null;
    }
  ]
],
      cvv: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[0-9]{3,4}$/) // Visa/Master 3، Amex 4
        ]
      ],
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      agree: [false, Validators.requiredTrue]
    });
  }

  submit() {
    if (this.cardPaymentForm.invalid) {
      this.cardPaymentForm.markAllAsTouched();
      return;
    }

    console.log("Form Submitted:", this.cardPaymentForm.value);
  }
}


