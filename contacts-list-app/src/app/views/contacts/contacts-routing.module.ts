import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
    {
        path: '',
        component: ContactsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ContactsIndexComponent
            },
            {
                path: 'new',
                pathMatch: 'full',
                component: ContactNewComponent
            },
            {
                path: ':contactId',
                pathMatch: 'full',
                component: ContactDetailsComponent
            },
            {
                path: ':contactId/edit',
                pathMatch: 'full',
                component: ContactEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ContactsRoutingModule { }
