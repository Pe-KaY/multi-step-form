import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-multistepform',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './multistepform.component.html',
  styleUrl: './multistepform.component.css'
})
export class MultistepformComponent {


  stepOne: boolean 
  stepTwo: boolean 
  stepThree: boolean 
  stepFour: boolean

constructor(private stepService: FormDataService){
  this.stepOne = stepService.stepOne
  this.stepTwo = stepService.stepTwo
  this.stepThree = stepService.stepThree
  this.stepFour = stepService.stepFour
}
  
}
