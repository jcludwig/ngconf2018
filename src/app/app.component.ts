import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list: ListItem[];

  constructor() {
    this.list = [
      {
        name: "First",
        ip: "one"
      },
      {
        name: "Second",
        running: true,
        disabled: true,
        ip: "two",
      }
    ]
  }
}

export interface ListItem {
  name: string;
  running?: boolean;
  disabled?: boolean;
  ip: string;
}