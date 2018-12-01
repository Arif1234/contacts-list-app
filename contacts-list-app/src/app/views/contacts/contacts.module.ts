import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactsComponent } from './contacts.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsIndexComponent,
    ContactNewComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  exports: [
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
