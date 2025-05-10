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
