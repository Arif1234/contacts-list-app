import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '@models/contact.interface';
import { ContactsService } from '@services/contacts.service';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.scss']
})
export class ContactsIndexComponent implements OnInit {
  public contactsData: Contact[];

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private actR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data => this.contactsData = data);
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  showContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    alert('Contact ' + contact.id + ' Deleted');
  }
}
