import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestComponent';
  totalValue: string = "";

  onGetTotal(data: string):void{
    this.totalValue = data;
  }
}