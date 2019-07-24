import { Component } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  contactForm: FormGroup;
  // @ts-ignore
  constructor( private formBuilder: FormBuilder ){
    this.createContactForm();
  }
  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: ['']
    });
  }
  onSubmit() {
    console.log('Your form Data: ' , this.contactForm.value);
  }
}
