import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { FormDataService } from '../service/form-data.service';
import { FormDataService } from '../service/form-data.service';
import { FormData } from '../interfaces/form-data';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{

  isConfirmed: boolean = false;
  finalDataReview: FormData = {};
  selectedPlanPrice:number = 0;
  totalPrice:number = 0;

  constructor(
    private router: Router,
    private formService: FormDataService,
  ) {};
  
  ngOnInit(): void {
    this.isConfirmed;
    
    this.finalDataReview = this.formService.getFormData();
    this.selectedPlanPrice = this.finalDataReview.planPrice as number;
    // console.log('received data: ', this.finalDataReview); 

    // get the prices and calculate the total sum
    if (!this.finalDataReview.addons) return;
    const sum = this.finalDataReview.addons?.reduce((cum, addon) => {
      if (this.finalDataReview.billingPeriod === 'yearly') {
        return addon.price.yearly + cum;
      };
      return addon.price.monthly + cum;
    }, this.selectedPlanPrice)

    this.totalPrice = sum;
    
  }

  calculateTotal (price : number) {

  }

  routeToPlan () {
    this.router.navigateByUrl('/plan');
  }

  formCompleted () {
    this.isConfirmed = true;
  }

  routeBack () {
    this.router.navigateByUrl('/addons');
  }

  
  

}
