import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit{

  isConfirmed: boolean = false;
  
  ngOnInit(): void {
    this.isConfirmed;
  }

  formCompleted () {
    this.isConfirmed = true;
  }

  routeBack () {
    
  }

  

}
