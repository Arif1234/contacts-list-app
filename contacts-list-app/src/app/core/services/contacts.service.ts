import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '@models/contact.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { CONTACTS_DATA } from './data/contacts.data';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contactsSource = new BehaviorSubject(CONTACTS_DATA);
  contactsObservable$ = this.contactsSource.asObservable();

  constructor(private http: HttpClient) { }

  public getContactDetails(): Observable<Contact[]> {
    // To switch to local dummy data by un-commenting below line.
    // return this.contactsSource;
    return this.http.get<Contact[]>(`${environment.api.baseUrl}/contacts/`);
  }

  public getContactDetailById(contactID: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.api.baseUrl}/contacts/${contactID}`);
  }

  public addContactDetail(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.api.baseUrl}/contacts`, contact);
  }

  public updateContactDetail(contact: Contact): Observable<Contact> {
    return this.http.patch<Contact>(`${environment.api.baseUrl}/contacts/${contact.id}`, contact);
  }

  public deleteContactDetail(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${environment.api.baseUrl}/contacts/${id}`);
  }
}
