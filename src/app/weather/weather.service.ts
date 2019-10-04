import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private FORECAST = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
  private KEY = '<YOUR_WEATHER_API_KEY_HERE>';
  private IMP = '&units=imperial';

  constructor(private http: HttpClient ) {}


  searchWeatherData(cityName: string): Observable<any> {
    return this
              .http
              .get(`${this.URL}${cityName}&APPID=${this.KEY}${this.IMP}`)
              .pipe(
               
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }


  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }


}
