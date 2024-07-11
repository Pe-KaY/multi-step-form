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
    // this.formService.updateFormData(something);
    this.finalDataReview = this.formService.getFormData();
    console.log(this.finalDataReview); 
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

  // firstLetterCap (word : string) {
  //   if (word.length === 0) {
  //     return word; // handle empty string case
  //   }
  
  //   return word.replace(word.at(0), word.at(0)?.toUpperCase());
  // }

  // firstLetterCap(word: string) {
  //   if (word.length === 0) {
  //     return word; // handle empty string case
  //   }
  //   const firstChar = word.charAt(0);
  //   return word.replace(firstChar, firstChar.toUpperCase());
  // }

  

}
