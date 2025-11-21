import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Buutton } from "../../../shared/buutton/buutton";

@Component({
  selector: 'lib-confirm-activation',
  // imports: [RouterLink],
  templateUrl: './confirmActivation.component.html',
  styleUrl: './confirmActivation.component.css',
  imports: [Buutton],
})
export class ConfirmActivationComponent implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  userEmail = this._authService.userEmail;
  isloading = signal<boolean>(false);
  isDisabled = signal<boolean>(false);

  ngOnInit(): void {
    console.log('from confirm activation', this.userEmail());
  }

  sendEmail() {
    this.isloading.set(true);
    this.isDisabled.set(true);
    this._authService.sendEmail(this.userEmail()).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.isloading.set(true);
        this.isDisabled.set(true);
      },
      complete: () => {
        this.isloading.set(true);
        this.isDisabled.set(true);
      },
    });
    this._router.navigateByUrl('/signup/check-email');
  }
}
