import { Component } from '@angular/core';
import {FormGroup, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit(f: NgForm) {
    console.log('Your form data : ', this.contactForm.value );
  }
}
