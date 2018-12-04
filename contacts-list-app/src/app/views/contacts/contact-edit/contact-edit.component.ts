import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@services/contacts.service';
import { Contact } from '@models/contact.interface';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  public contact: Contact;
  public contactID;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    this.route.params.forEach(contact => this.contactID = contact.contactId);
  }

  ngOnInit() {
    this.contactsService.getContactDetailById(this.contactID).subscribe(data => this.contact = data);
  }

}
