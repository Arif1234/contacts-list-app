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
  public selected = 'Active';

  @Output() save = new EventEmitter<Contact>();

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.newContactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      status: [this.selected, [Validators.required]]
    });
  }

  public onSubmit(form: FormGroup) {
    if (this.newContactForm.valid) {
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
