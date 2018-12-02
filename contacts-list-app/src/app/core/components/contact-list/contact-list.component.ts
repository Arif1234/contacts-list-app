import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Contact } from '@models/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private _data;
  public dataSource;
  displayedColumns: string[];
  @Output() edit = new EventEmitter<Contact>();
  @Output() show = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Added GETTER and SETTER here for change detection.
  get data(): Contact[] {
    return this._data;
  }

  @Input()
  set data(data: Contact[]) {
    this._data = data;
  }

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Contact>(this._data);
    this.displayedColumns = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'status', 'buttons'];
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }

  public showDetails(contact: Contact) {
    this.show.emit(contact);
  }

  public editContact(contact: Contact) {
    this.edit.emit(contact);
  }

  public deleteContact(contact: Contact) {
    this.remove.emit(contact);
  }
}
