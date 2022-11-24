import { Component } from '@angular/core';
import { User } from './User';

// Register locale to use for decimals for example:
// import { registerLocaleData } from '@angular/common';
// import localeNl from '@angular/common/locales/nl';
// registerLocaleData(localeNl, 'nl');

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
    someDate: Date = new Date(2022,11,28)
    someInteger = 42.0;
    someNumber: number = 43 / 7;
    someText = "Hello Angular!";
    someUser = new User("Barry", 27, 2.06)

    ngOnInit(): void {}
  }

