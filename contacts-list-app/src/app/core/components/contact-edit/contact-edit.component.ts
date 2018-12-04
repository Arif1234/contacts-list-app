import { Router } from '@angular/router';
import { ContactsService } from '@services/contacts.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  public newContactForm: FormGroup;
  public selected: string;
  @Input() contact;

  @Output() save = new EventEmitter<Contact>();

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.selected = this.contact.status;

    this.newContactForm = this.fb.group({
      id: [this.contact.id],
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      email: [this.contact.email, [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      phoneNumber: [this.contact.phoneNumber, [Validators.required, Validators.minLength(10)]],
      status: [this.contact.status, [Validators.required]]
    });
  }

  public onSubmit(form: FormGroup) {
    if (this.newContactForm.valid) {
      this.contactsService.updateContactDetail(this.newContactForm.value)
        .subscribe(
          data => {
            this.toastr.success('Contact was updated successfully !!!');
            this.router.navigate(['/contacts']);
          },
          error => {
            console.log('Error', error);
            this.toastr.error('Error in editing contact details !!!');
          }
        );
    }
  }
}
