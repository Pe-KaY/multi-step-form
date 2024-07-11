import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  constructor(private router: Router , private func: FormDataService) {};
  
  ngOnInit(): void {
    this.isConfirmed;
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
