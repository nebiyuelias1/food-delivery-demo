import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ApiService } from '../api.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  restaurants$!: Observable<Restaurant[]>;
  error: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.restaurants$ = this.apiService.getNearbyRestaurants(
        position.coords.longitude,
        position.coords.latitude
      ).pipe(catchError((err, _) => {
        this.error = err;
        throw err;
      }));
    });
  }

}
