import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '@services/contacts.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public newContactForm: FormGroup;
  public status = 'active';
  @Input() contact;

  @Output() save = new EventEmitter<Contact>();

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.contact) {
      this.newContactForm = this.fb.group({
        fname: [this.contact.firstName, Validators.required],
        lname: [this.contact.lastName, Validators.required],
        email: [this.contact.email, [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        phoneNo: [this.contact.phoneNumber, [Validators.required, Validators.minLength(10)]],
        status: [this.status, [Validators.required]]
      });
    } else {
      this.newContactForm = this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
        phoneNo: ['', [Validators.required, Validators.minLength(10)]],
        status: [this.status, [Validators.required]]
      });
    }
  }

  public onSubmit(form: FormGroup) {
    if (this.newContactForm.valid) {
      console.log(this.newContactForm.value);
      // For adding new contact
      this.contactsService.addContactDetail(this.newContactForm.value)
        .subscribe(
          data => {
            console.log('New contact successfully added was', data);
          },
          error => {
            console.log('Error', error);
          }
        );
    }
  }
}
