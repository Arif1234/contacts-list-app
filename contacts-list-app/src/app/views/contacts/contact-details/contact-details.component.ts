import { Component, OnInit } from '@angular/core';
import { Contact } from '@models/contact.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);

  }

  deleteContact(contact: Contact) {
    alert('Contact ' + contact.id + ' Deleted');
  }

}
