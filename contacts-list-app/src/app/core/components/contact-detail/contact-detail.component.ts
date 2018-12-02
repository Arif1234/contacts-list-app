import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  selector: 'app-contact-detail-container',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
    this.contact = data;
  }
}
