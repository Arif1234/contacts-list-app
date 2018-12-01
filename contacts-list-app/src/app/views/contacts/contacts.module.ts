import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '@modules/shared.module';

import { ContactsComponent } from './contacts.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsIndexComponent,
    ContactNewComponent,
    ContactDetailsComponent,
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ],
  exports: [
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
