import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '@services/contacts.service';
import { Contact } from '@models/contact.interface';

@Component({
  selector: 'app-contact-detail-container',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  public contactID;
  public contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {
    this.route.params.forEach(contact => this.contactID = contact.contactId);
   }

  ngOnInit() {
    this.contactsService.getContactDetailById(this.contactID).subscribe(data => this.contact = data);
  }
}
