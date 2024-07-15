import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Addon {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  checked: boolean;
}

@Component({
  selector: 'app-addons',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css'],
})
export class AddonsComponent implements OnInit {
  addonsList: Addon[] = [
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
  isMonthly!: boolean;
  canGoNext = false;
  selectedAddons: Addon[] = [];

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const controls: { [key: string]: any } = {};
    for (const addon of this.addonsList) {
      controls[addon.name] = [false, Validators.required];
    }
    this.addonForm = this.fb.group(controls);

    // Set isMonthly based on the service data
    this.isMonthly =
      this.formDataService.getFormData().billingPeriod === 'monthly';

    // Load the selected addons from the service
    const selectedAddons = this.formDataService.getFormData()?.addons ?? [];
    selectedAddons.forEach((addon: Addon) => {
      if (this.addonForm.controls[addon.name]) {
        this.addonForm.controls[addon.name].setValue(true);
      }
    });
  }

  atLeastOneValidator(): boolean {
    return Object.entries(this.addonForm.controls).some(([key, control]) => {
      return control.status === 'VALID' && control.value === true;
    });
  }

  checkValidity() {
    this.canGoNext = this.atLeastOneValidator();
  }

  getSelectedAddonsData() {
    const selectedAddons = [];
    for (const key in this.addonForm.value) {
      if (this.addonForm.value[key]) {
        const addon = this.addonsList.find((addon) => addon.name === key);
        if (addon) {
          selectedAddons.push(addon);
        }
      }
    }
    return selectedAddons;
  }

  nextStep() {
    const selectedAddons = this.getSelectedAddonsData();
    this.formDataService.updateFormData({ addons: selectedAddons });
    this.router.navigateByUrl('/summary');
    this.formDataService.activeStep('summary');
  }

  goBack() {
    this.router.navigateByUrl('/plan');
    this.formDataService.activeStep('plan');
  }
}
