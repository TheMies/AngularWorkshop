import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    money:number = 100; // backing field

  get Money(): number{
    return this.money;
  }

  set Money(value: number){
    if (value > 1000){
      alert("Value must be <= 1000");
    }
    else{
      this.money = value;
    }
  }
}




