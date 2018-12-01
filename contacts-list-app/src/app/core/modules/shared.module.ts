import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ContactListComponent } from '@components/contact-list/contact-list.component';
import { ContactFormComponent } from '@components/contact-form/contact-form.component';
import { ContactDetailComponent } from '@components/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailComponent
  ]
})
export class SharedModule { }
