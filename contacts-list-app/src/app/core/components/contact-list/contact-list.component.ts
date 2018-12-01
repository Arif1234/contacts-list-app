import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Contact } from '@models/contact.interface';

const ELEMENT_DATA: Contact[] = [
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Active'},
  { id: 23, firstName: 'John', lastName: 'Arthur', email: 'john@gmail.com', phoneNumber: 121212121, status: 'Inactive'}
];

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'status', 'buttons'];
  dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }

}
