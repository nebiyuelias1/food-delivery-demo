import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() sidebarToggleEvent = new EventEmitter<boolean>();
  private isSidebarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggleEvent.emit(this.isSidebarOpen);
  }
}
