import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUnchanged: boolean = true;

  onToggleEnableState(){
    this.isUnchanged = !this.isUnchanged;
  }
}


