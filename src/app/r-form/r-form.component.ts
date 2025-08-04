import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1000ms ease-in')])
    ])
  ]
})


export class RFormComponent {
  hrForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize Form Group with validation
    this.hrForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      company: ['', Validators.required],
      designation: ['', Validators.required],
      experience: ['', Validators.required]
    });
  }

  // Called when form is submitted
  onSubmit() {
    this.isSubmitted = true;
    if (this.hrForm.valid) {
      this.sendEmail();
    }
  }

  // EmailJS Integration
  sendEmail() {
    const templateParams = {
      fullName: this.hrForm.value.fullName,
      email: this.hrForm.value.email,
      phone: this.hrForm.value.phone,
      company: this.hrForm.value.company,
      designation: this.hrForm.value.designation,
      experience: this.hrForm.value.experience
    };

    emailjs.send('service_e7h2uot', '', templateParams, '2mGovGAvg2vrjcX-Q')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email Sent Successfully!');
        this.hrForm.reset();
        this.isSubmitted = false;
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email.');
      });
  }
}