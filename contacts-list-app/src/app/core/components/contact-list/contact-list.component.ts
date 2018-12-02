import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
}
