// import { Component } from '@angular/core';
// import { ReactiveFormsModule,FormBuilder, Validators, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-book-table',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './book-table.component.html',
//   styleUrl: './book-table.component.css'
// })
// export class BookTableComponent {

// constructor(private formbulder:FormBuilder){
// this.bookedform()
// }

// isbooked:boolean=false
// form!:FormGroup
// private bookedform(){
//   this.form=this.formbulder.group({
//     name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]], // Allows only alphabets and spaces
//     email: ['', [Validators.required, Validators.email]], // Email validation
//     phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]], // Phone number should be 10 digits
//     date: ['', [Validators.required, this.futureDateValidator]], // Validates that the date should be in the future
//     time: ['', Validators.required], // Time validation
//     numberOfPeople: ['', [Validators.required, Validators.min(1), Validators.max(20)]], // Minimum 1 person and maximum 20 people
//     message: ['', Validators.required] // Message is required
//   })
// }
// futureDateValidator(control: any) {
//   const currentDate = new Date();
//   const inputDate = new Date(control.value);
//   return inputDate > currentDate ? null : { invalidDate: true };
// }
// confirmBooking(){
//   this.isbooked=true
//   setTimeout(() => {
//     this.isbooked=false
//   }, 4000);
// this.form.reset()

// }
// get f() {
//   return this.form.controls;
// }
// }

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {CommonModule}from '@angular/common'

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  constructor(private formBuilder: FormBuilder) {
    this.bookedForm();
  }

  isbooked: boolean = false;
  form!: FormGroup;

  private bookedForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]], // 10-15 digits for phone number
      date: ['', [Validators.required, this.futureDateValidator]],
      time: ['', Validators.required],
      numberOfPeople: ['', [Validators.required, Validators.min(1), Validators.max(20)]],
      message: ['']
    });
  }

  confirmBooking() {
    if (this.form.valid) {
      this.isbooked = true;
      setTimeout(() => {
        this.isbooked = false;
      }, 4000);
      this.form.reset();
    }
  }

  // Custom validator for date to ensure it's in the future
  futureDateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate <= today) {
      return { invalidDate: true };
    }
    return null;
  }
}
