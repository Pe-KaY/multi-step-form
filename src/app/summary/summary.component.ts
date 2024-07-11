import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { FormDataService } from '../service/form-data.service';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{

  isConfirmed: boolean = false;
  finalDataCompilation = {};

  constructor(
    private router: Router,
    private formService: FormDataService,
  ) {};
  
  ngOnInit(): void {
    this.isConfirmed;
    const something = {
      name: 'kofi',
      email: 'ko@gmail.com',
      phone: '02332323223',
      selectectedPlan: 'arcade',
      billingPeriod: 'monthly',
    }
    this.formService.updateFormData(something);
    const finalDataCompilation = this.formService.getFormData();
    console.log(finalDataCompilation); 
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
