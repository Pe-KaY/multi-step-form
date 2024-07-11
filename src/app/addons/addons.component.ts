import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-addons',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addons.component.html',
  styleUrl: './addons.component.css',
})
export class AddonsComponent {
  addonsList = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: { monthly: 1, yearly: 10 },
      checked: false,
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: { monthly: 2, yearly: 20 },
      checked: false,
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: { monthly: 2, yearly: 20 },
      checked: false,
    },
  ];

  addonForm!: FormGroup;
  isMonthly!: true | false;
  canGoNext = false;
  // selectedAddons: any;

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let controls: { [key: string]: any } = {};
    for (let addon of this.addonsList) {
      controls[addon.name] = ['', Validators.required];
    }
    console.log('controls: ', controls);
    this.addonForm = this.fb.group(controls);

    this.isMonthly =
      this.formDataService.getFormData().billingPeriod === 'monthly';
  }

  atLeastOneValidator(): boolean {
    console.log("form validator form: ",this.addonForm.controls )
    return Object.entries(this.addonForm.controls).some(([key, control]) => {
      if (control.status === 'VALID' && control.value === true) {
        return true;
      }
      return false;
    });
  }

  checkValidity() {
    this.canGoNext = this.atLeastOneValidator();
    console.log(this.atLeastOneValidator());
    console.log('this.canGoNext: ', this.canGoNext);
  }
  nextStep() {
    console.log(
      'Moving to next steps ',
      this.addonForm.value,
      'form valid : ',
      this.addonForm.valid
    );
    this.router.navigateByUrl('/summary');
    this.formDataService.updateFormData(this.addonForm.value);
    this.formDataService.activeStep('summary');
    
    // if (this.addonForm.valid) {
      // }
    }
    
    goBack() {
      this.router.navigateByUrl('/plan');
      this.formDataService.activeStep('plan');
  }
}
