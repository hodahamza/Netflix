import { AuthService } from './../../services/auth';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPlansData } from '../../interfaces/iplan';
import { CurrencyPipe } from '@angular/common';
import { PreviousRouteService } from '../../../shared/services/previousRoute/previous-route-service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-confirmplan.component',
  imports: [FormsModule, CurrencyPipe ],
  templateUrl: './confirmplan.component.html',
  styleUrl: './confirmplan.component.css',
})
export class ConfirmplanComponent implements OnInit {
  selectedPlanId = signal<string | null>(null);
  selectedPlanName = signal<string | null>(null);
  plansData = signal<IPlansData[]>([]);
  previousRoute = signal('')
  constructor(private previousRouteService: PreviousRouteService) {
   
  }
  private _authService = inject(AuthService);
  
  private _router = inject(Router);
  ngOnInit(): void {
     this.previousRoute.set(this.previousRouteService.getPreviousUrl())
    this._authService.getAllPlans().subscribe({
      next: (res) => {
        console.log('all plans', res);

        const ordered = res.Data.sort((a: any, b: any) => {
          const order = ['Basic', 'Standared', 'Premium'];
          return order.indexOf(a.Name) - order.indexOf(b.Name);
        });

        this.plansData.set(ordered);
        console.log(this.plansData());
        const defaultPlanId =this.plansData().find((plan) => plan.Name.toLowerCase() === 'premium')?.Id ?? '1';
          this.selectedPlanId.set(defaultPlanId)
          const defaultPlanName = this.plansData().find((plan) => plan.Name.toLowerCase() === 'premium')?.Name ?? ''
          this.selectedPlanName.set(defaultPlanName);
        // console.log('defult selected plan id', this.selectedPlanId);
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('get plans completed');
      },
    });
console.log('Previous route:',this.previousRouteService.getPreviousUrl()=='/signup/cash-payment');
  }

  onPlanClicked(div: HTMLDivElement) {
    console.log(div);
    console.log(div.getAttribute('planId'));
    this.selectedPlanId.set(div.getAttribute('planId'));

    
    this.selectedPlanName.set(this.plansData().find((plan) => plan.Id.toLowerCase() === this.selectedPlanId())?.Name ?? '');
    
    
  }
onSubmit(){
  //  console.log('seleeeeeeeected plan id', this.selectedPlanId());
  //  console.log('seleeeeeeeected plan Name', this.selectedPlanName());
  // const planObj ={
  //   Id:this.selectedPlanId() as string,
  //   Name:this.selectedPlanName() as string
  //  }
  //  this._authService.subscripePlan(planObj).subscribe({
  //   next:(res)=>{
  //     console.log(res);
      
  //   },
  //   error:(err)=>{
  //     console.log("error" , err);
      
  //   }
  //  })
  if (this.previousRoute()=='/signup/card-payment') {
     console.log(this.previousRoute());
      
      
      this._router.navigateByUrl("/signup/card-payment")
      return;
   }
   else if(this.previousRoute()==='/signup/cash-payment'){
     
      this._router.navigateByUrl("/signup/cash-payment")
      return;
   }
   
    this._router.navigateByUrl("/signup/choose-payment")
    console.log("clicked");
    
   
}
}
