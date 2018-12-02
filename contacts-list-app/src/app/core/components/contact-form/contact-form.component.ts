import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnChanges {
  public newContactForm: FormGroup;
  @Input() contact: Contact = {
    id: undefined,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: undefined
  };

  @Output() save = new EventEmitter<Contact>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newContactForm = this.fb.group({
      fname: [this.contact.firstName, Validators.required],
      lname: [this.contact.lastName, Validators.required],
      email: [this.contact.email, [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      phoneNo: [this.contact.phoneNumber, [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnChanges() {
    if (this.contact) {
      this.newContactForm.patchValue({...this.contact});
    }
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('First Name', form.value.fname);
    console.log('Last Name', form.value.lname);
    console.log('Email', form.value.email);
    console.log('Phone Number', form.value.phoneNo);

    if (this.newContactForm.valid) {
      this.save.emit(this.newContactForm.value);
    }
  }
}
