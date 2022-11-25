import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'daqs-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: string = "Button press tester";
  _multiplier: number = 1;
  buttonClickCounter: number = 0;
  @Input() initalMultiplier: number = 0;
  @Output() onGetTotal: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.multiplier = this.initalMultiplier;
  }

  onButtonClicked(): void{
    this.buttonClickCounter++;
  }

  onGetTotalClicked():void{
    this.onGetTotal.emit("the total is " + this.total);
  }

  onResetButtonClicked():void{
    this.buttonClickCounter = 0;
  }


  set multiplier(value: number) {
    console.log(value);
    this._multiplier= value;
  }

  get multiplier(): number{
    return this._multiplier;
  }

  get total(): number{
    return this._multiplier * this.buttonClickCounter;
  }
}
