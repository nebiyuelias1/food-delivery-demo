import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isSideBarOpen = false;

  constructor() {}

  ngOnInit() {
  }

  handleSideBarToggleEvent(event: boolean) {
    this.isSideBarOpen = event;
  }
}
