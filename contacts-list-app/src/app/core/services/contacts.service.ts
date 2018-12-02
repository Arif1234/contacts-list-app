import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '@models/contact.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { CONTACTS_DATA } from './data/contacts.data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contactsSource = new BehaviorSubject(CONTACTS_DATA);
  contactsObservable$ = this.contactsSource.asObservable();

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<Contact[]> {
    return this.contactsSource;
  }
}
