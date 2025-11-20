import { AuthService } from './../../services/auth';
import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "lib-confirmplan.component",
  imports: [ FormsModule],
  templateUrl: "./confirmplan.component.html",
  styleUrl: "./confirmplan.component.css",
})
export class ConfirmplanComponent implements OnInit {
  selectedPlan: string | null = null; 
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


  onSubmit(value:any){
    console.log(value);
    
  }

}



