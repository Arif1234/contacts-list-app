import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange(e) {
    if (e.value === 'index') {
      this.router.navigateByUrl('/contacts');
    } else {
      this.router.navigateByUrl('/contacts/new');
    }
  }
}
