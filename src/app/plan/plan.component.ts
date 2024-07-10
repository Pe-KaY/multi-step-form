import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../service/form-data.service';
import { FormData } from '../interfaces/form-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent implements OnInit {
  PlanSelectionForm!: FormGroup;
  billingPeriod = 'monthly';
  plans = [
    { name: 'Arcade', price: '$9', icon: '../../assets/icon-arcade.svg' },
    { name: 'Advanced', price: '$12', icon: '../../assets/icon-advanced.svg' },
    { name: 'Pro', price: '$15', icon: '../../assets/icon-pro.svg' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.PlanSelectionForm = this.fb.group({
      selectedPlan: ['', Validators.required],
      billingPeriod: [this.billingPeriod, Validators.required],
    });

    const saveData: FormData = this.formDataService.getFormData();
    if (saveData) {
      this.PlanSelectionForm.patchValue(saveData);
      this.billingPeriod = saveData.billingPeriod || this.billingPeriod;
    }
  }

  onBillingPeriodChange() {
    this.billingPeriod = this.PlanSelectionForm.get('billingPeriod')?.value;
  }

  goBack() {
    this.router.navigate(['']);
  }

  nextStep() {
    if (this.PlanSelectionForm.valid) {
      this.formDataService.updateFormData(this.PlanSelectionForm.value);
      this.router.navigate(['/addons']);
    }
  }
}
