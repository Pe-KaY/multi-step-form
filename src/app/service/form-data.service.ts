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

  constructor() {}
}
