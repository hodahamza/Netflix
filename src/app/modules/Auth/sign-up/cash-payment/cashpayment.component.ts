import { Component } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "lib-cashpayment.component",
  standalone: true,
  imports: [FormsModule ,RouterLink],
  templateUrl: "./cashpayment.component.html",
  styleUrls: ["./cashpayment.component.css"],
})
export class CashpaymentComponent {
  phone: string = "";
  agree: boolean = false;

  constructor(private router: Router) {}

  submit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log("Phone:", this.phone);
    console.log("Agree:", this.agree);

    this.router.navigate(["/signup/fawry-code"]);
  }
}
