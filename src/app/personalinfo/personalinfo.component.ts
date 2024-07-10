import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-personalinfo',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.css'
})
export class PersonalinfoComponent implements OnInit{
  personalInfoForm!: FormGroup;
  pattern: any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+]?[0-9]{1,3}[\\s]?[0-9]{3}[\\s]?[0-9]{3}[\\s]?[0-9]{4}')]],
    })
  }

  nextStep(): void{
    console.log('hello')
    if (this.personalInfoForm.valid){
      console.log(this.personalInfoForm.value)
    }
    else{
      console.log('Form rejected')
    }
  }
}
 