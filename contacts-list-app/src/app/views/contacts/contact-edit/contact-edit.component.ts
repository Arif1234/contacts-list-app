import { Component, OnInit } from '@angular/core';
import { Contact } from '@models/contact.interface';

const data: Contact = {
  id: 23,
  firstName: 'John',
  lastName: 'Arthur',
  email: 'john@gmail.com',
  phoneNumber: 121212121,
  status: 'Active'
};

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  public contact: Contact;

  constructor() { }

  ngOnInit() {
    this.contact = data;
  }

}
