import { Router } from '@angular/router';
import { ContactsService } from '@services/contacts.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public newContactForm: FormGroup;
  public status = 'Active';
  @Input() contact;

  @Output() save = new EventEmitter<Contact>();

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.contact) {
      this.newContactForm = this.fb.group({
        firstName: [this.contact.firstName, Validators.required],
        lastName: [this.contact.lastName, Validators.required],
        email: [this.contact.email, [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        phoneNumber: [this.contact.phoneNumber, [Validators.required, Validators.minLength(10)]],
        status: [this.contact.status, [Validators.required]]
      });
    } else {
      this.newContactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        status: [this.status, [Validators.required]]
      });
    }
  }

  public onChange(e) {
    if (e.value === 'inactive') {
      this.status = 'Inactive';
    }
  }

  public onSubmit(form: FormGroup) {
    if (this.newContactForm.valid) {
      // For adding new contact
      this.contactsService.addContactDetail(this.newContactForm.value)
        .subscribe(
          data => {
            this.toastr.success('New contact was added successfully !!!');
            console.log('New contact successfully added was', data);
            this.router.navigate(['/contacts']);
          },
          error => {
            console.log('Error', error);
            this.toastr.error('Error adding contact details !!!');
          }
        );
    }
  }
}
