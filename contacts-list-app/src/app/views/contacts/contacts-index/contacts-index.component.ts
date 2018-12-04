import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '@models/contact.interface';
import { ContactsService } from '@services/contacts.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
          (res) => {
            this.toastr.success('Contact was deleted successfully !!!');
            console.log(`${res} is deleted !!!`);
            window.location.reload();
          },
          (error) => {
            console.log('Error', error);
            this.toastr.error('Error deleting contact details !!!');
          }
        );
    }
  }
}
