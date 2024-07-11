import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
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
  // selectedAddons: any;

  constructor(
    private formDataService: FormDataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let controls: { [key: string]: any } = {};
    for (let addon of this.addonsList) {
      controls[addon.name] = [false, Validators.required];
    }
    console.log('controls: ', controls);
    this.addonForm = this.fb.group(controls);
  }

  nextStep() {
    console.log('Moving to next steps ', this.addonForm.value);

    if (this.addonForm.valid) {
      this.formDataService.updateFormData(this.addonForm.value);
      this.router.navigateByUrl('/summary');
    }
  }

  goBack() {
    this.router.navigateByUrl('/plan');
  }
}
