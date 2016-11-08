import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
    <li>
      {{name}}
    </li>
    `
})
export class UserItemComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
