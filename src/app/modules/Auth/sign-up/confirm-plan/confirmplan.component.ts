import { AuthService } from './../../services/auth';
import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "lib-confirmplan.component",
  imports: [RouterLink],
  templateUrl: "./confirmplan.component.html",
  styleUrl: "./confirmplan.component.css",
})
export class ConfirmplanComponent implements OnInit {
  private _authService = inject(AuthService)
  ngOnInit(): void {
   this._authService.getAllPlans().subscribe({
    next:(res)=>{console.log(res)
    },
    error:(err)=>{console.log(err);
    },
    complete:()=>{console.log("get plans completed");
    }
   })
  }

}
