import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ContactsRoutingModule { }
