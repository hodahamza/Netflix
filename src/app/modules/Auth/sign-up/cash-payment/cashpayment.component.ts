import { Component, signal } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { Buutton } from "../../../shared/buutton/buutton";

@Component({
  selector: "lib-cashpayment.component",
  standalone: true,
  imports: [FormsModule, RouterLink, Buutton],
  templateUrl: "./cashpayment.component.html",
  styleUrls: ["./cashpayment.component.css"],
})
export class CashpaymentComponent {
onStartMemberShip() {
throw new Error('Method not implemented.');
}
  phone: string = "";
  agree: boolean = false;
   isloading = signal<boolean>(false);
  isDisabled = signal<boolean>(false);
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
