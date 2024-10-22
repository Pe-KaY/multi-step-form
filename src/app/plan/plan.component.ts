import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../service/form-data.service';
import { CommonModule } from '@angular/common';
import { FormData } from '../interfaces/form-data';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  PlanSelectionForm!: FormGroup;
  billingPeriod = 'monthly';
  planPrice!: number;
  // planPrice = this.billingPeriod === 'monthly'? selectedPlan.priceMonthly : selectedPlan.priceYearly;

  plans = [
    {
      name: 'Arcade',
      priceMonthly: 9,
      priceYearly: 90,
      icon: '../../assets/icon-arcade.svg',
    },
    {
      name: 'Advanced',
      priceMonthly: 12,
      priceYearly: 120,
      icon: '../../assets/icon-advanced.svg',
    },
    {
      name: 'Pro',
      priceMonthly: 15,
      priceYearly: 150,
      icon: '../../assets/icon-pro.svg',
    },
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

    const savedData = this.formDataService.getFormData();
    if (savedData) {
      this.PlanSelectionForm.patchValue(savedData);
      this.billingPeriod = savedData.billingPeriod || this.billingPeriod;
    }
  }

  selectPlan(plan: string) {
    this.PlanSelectionForm.patchValue({ selectedPlan: plan });
  }

  toggleBillingPeriod() {
    const newPeriod = this.billingPeriod === 'monthly' ? 'yearly' : 'monthly';
    this.PlanSelectionForm.patchValue({ billingPeriod: newPeriod });
    this.billingPeriod = newPeriod;
  }

  goBack() {
    this.router.navigate(['']);
    this.formDataService.activeStep('personal');
  }

  nextStep() {
    this.formDataService.activeStep('add-ons');
    if (this.PlanSelectionForm.valid) {
      const selectedPlanName =
        this.PlanSelectionForm.get('selectedPlan')?.value;
      const billingPeriod = this.PlanSelectionForm.get('billingPeriod')?.value;
      const selectedPlan = this.plans.find(
        (plan) => plan.name === selectedPlanName
      );
      const price = selectedPlan
        ? billingPeriod === 'monthly'
          ? selectedPlan.priceMonthly
          : selectedPlan.priceYearly
        : null;

      const data: FormData = {
        billingPeriod: billingPeriod,
        selectedPlan: selectedPlan?.name,
        planPrice: price,
      };

      this.formDataService.updateFormData(data);
      this.router.navigate(['/addons']);
    }
  }
}
