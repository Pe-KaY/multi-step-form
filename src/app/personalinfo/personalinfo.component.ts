import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from '../service/form-data.service';
import { FormData } from '../interfaces/form-data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personalinfo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.css'
})
export class PersonalinfoComponent implements OnInit{
  personalInfoForm!: FormGroup;
  pattern: any;

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0][2,5][4,5,0,9][0-9]{7}$/)]],
    })
            


    // load form data if available
    const saveData: FormData = this.formDataService.getFormData();
    if (saveData) {
      this.personalInfoForm.patchValue(saveData);
    }
  }
  


  nextStep(): void{
    if (this.personalInfoForm.valid){
        this.formDataService.updateFormData(this.personalInfoForm.value);
        this.router.navigate(['/plan']);
    }
    else{
      console.log('Form rejected')
    }
  }
}
 