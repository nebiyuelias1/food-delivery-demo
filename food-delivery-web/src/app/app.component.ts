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
  restaurants$!: Observable<Restaurant[]>;
  isSideBarOpen = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.restaurants$ = this.apiService.getNearbyRestaurants(
        position.coords.longitude,
        position.coords.latitude
      );
    });
  }

  handleSideBarToggleEvent(event: boolean) {
    this.isSideBarOpen = event;
  }
}
