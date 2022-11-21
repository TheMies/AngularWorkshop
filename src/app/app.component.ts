import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {name:"Harry", age:42, length:1.86},
    {name:"Joop", age:54, length:1.74},
    {name:"Henk", age:31, length:2.01}
  ];
}