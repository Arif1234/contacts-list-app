import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@services/contacts.service';
import { Contact } from '@models/contact.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);

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
