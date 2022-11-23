import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
    user: User = new User("Herman", 42, 1.86);
}

