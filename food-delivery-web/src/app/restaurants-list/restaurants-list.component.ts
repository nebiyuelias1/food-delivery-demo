import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { debounceTime, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit {
  restaurants$!: Observable<Restaurant[]>;
  error: any;
  private longitude?: number = undefined;
  private latitude?: number = undefined;
  private subject = new Subject<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
      this.restaurants$ = this.getRestaurants(this.longitude, this.latitude);
    });

    this.subject
      .pipe(debounceTime(500))
      .subscribe(
        (searchTerm) =>
          (this.restaurants$ = this.getRestaurants(
            this.longitude!,
            this.latitude!,
            searchTerm
          ))
      );
  }

  getRestaurants(long: number, latitude: number, searchTerm?: string) {
    return this.apiService.getNearbyRestaurants(long, latitude).pipe(
      map((res, _) => {
        if (searchTerm) {
          return res.filter((r, index) =>
            r.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return res;
      }),
      catchError((err, _) => {
        this.error = err;
        throw err;
      })
    );
  }

  handleKeyUpEvent(event: any) {
    this.subject.next(event.target.value);
  }
}
