import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '@models/contact.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { CONTACTS_DATA } from './data/contacts.data';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public url = 'https://my-json-server.typicode.com/Arif1234/arifdb';

  public contactsSource = new BehaviorSubject(CONTACTS_DATA);
  contactsObservable$ = this.contactsSource.asObservable();

  constructor(private http: HttpClient) { }

  public getContactDetails(): Observable<Contact[]> {
    return this.contactsSource;
    // return this.http.get<Contact[]>(`${url}/contacts/${conactId}`);
  }

  public getContactDetailById(contactID: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/contacts/${contactID}`);
  }

  public addContactDetail(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.url}/contacts`, contact);
  }

  public updateContactDetail(contact: Contact): Observable<Contact> {
    return this.http.patch<Contact>(`${this.url}/contacts/${contact.id}`, contact);
  }

  public deleteContactDetail(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.url}/contacts/${id}`);
  }
}
