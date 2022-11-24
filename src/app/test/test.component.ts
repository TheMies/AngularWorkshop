import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { User } from './User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  constructor(private log: LogService){
    log.log("In constructor!");
  }
}
  

