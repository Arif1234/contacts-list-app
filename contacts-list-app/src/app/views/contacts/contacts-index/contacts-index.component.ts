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
    this.getData();
  }

  public getData() {
    this.contactsService.getContactDetails().subscribe(data => this.contactsData = data);
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  showContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure?');
    if (r) {
      alert('Contact ' + contact.id + ' Deleted');
      this.contactsService.deleteContactDetail(contact.id)
        .subscribe(
          (res) => alert(`${res} is deleted !!!`),
          (error) => {
            console.log('Error', error);
          }
        );
    }
  }
}
