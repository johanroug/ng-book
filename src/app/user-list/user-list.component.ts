import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <app-user-item *ngFor="let name of names" [name]="name"></app-user-item>
    </ul>
    `
})
export class UserListComponent implements OnInit {
  names: string[];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit() {
  }

}
