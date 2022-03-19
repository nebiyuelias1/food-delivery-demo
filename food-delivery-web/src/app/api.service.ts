import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getNearbyRestaurants(
    long: number,
    lat: number
  ): Observable<Restaurant[]> {
    const params = new HttpParams().set('long', long).set('lat', lat);
    return this.http
      .get<Restaurant[]>('http://localhost:8000/api/restaurants/', {
        params: params,
      });
  }
}
