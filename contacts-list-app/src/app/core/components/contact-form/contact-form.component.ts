import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public newContactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newContactForm = this.fb.group({
      fname: ['Tasleem', Validators.required],
      lname: ['Arif', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      phoneNo: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('First Name', form.value.fname);
    console.log('Last Name', form.value.lname);
    console.log('Email', form.value.email);
    console.log('Phone Number', form.value.phoneNo);
  }
}
