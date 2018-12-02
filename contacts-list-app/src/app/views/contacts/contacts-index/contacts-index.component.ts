import { Component, OnInit } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { ContactsService } from '@services/contacts.service';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.scss']
})
export class ContactsIndexComponent implements OnInit {
  public contactsData: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => this.contactsData = data);
  }
}
