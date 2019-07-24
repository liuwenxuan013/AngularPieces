import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private f: any;

  onSubmit(f: NgForm) {
    console.log('Your form Data: ', this.f.value);
    //  here, we can use it to send the data to a server via a POST request.
  }
}

