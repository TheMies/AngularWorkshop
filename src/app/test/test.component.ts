import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit, OnChanges, OnDestroy {
    user: User | undefined;

    ngOnInit(): void {
      this.user = new User("Herman", 42, 1.42);
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("Handle changes...");
    }

    ngOnDestroy(): void {
      console.log("Cleanup...");
    }
  }

