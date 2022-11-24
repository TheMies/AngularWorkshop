import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
    someText = "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.";

    ngOnInit(): void {}
  }

