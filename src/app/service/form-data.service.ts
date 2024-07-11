import { Injectable } from '@angular/core';
import { FormData } from '../interfaces/form-data';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData: FormData = {};

  counter: number = 0;

  updateFormData(data: Partial<FormData>) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData(): FormData {
    return this.formData;
  }

  resetFormData() {
    this.formData = {};
  }

  // Stepper Functions start here
  stepOne: boolean = true;
  stepTwo: boolean = false;
  stepThree: boolean = false;
  stepFour: boolean = false;

  // Active step function

  // Add this to your next or back button using this logic
  // note: if your next routes to "summary" call this function in your next with summary as argumens
  // EXAMPLE: activeStep('summary'). DO same for your back
  activeStep(str: string): void {
    // first reset all steps
    this.stepsResseter();

    //  then activates current step
    if (str === 'personal') this.stepOne = true;
    if (str === 'plan') this.stepTwo = true;
    if (str === 'add-ons') this.stepThree = true;
    if (str === 'summaryl') this.stepFour = true;
  }

  // reset step function
  stepsResseter(): void {
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepFour = false;
  }

  // Stepper Functions ends here

  constructor() {}
}
