import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string = "";
  @Output() onGetNameClicked: EventEmitter<string> = new EventEmitter<string>();
  
  onClick() {
    this.onGetNameClicked.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void { }
}
