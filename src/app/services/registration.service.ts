import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private http: HttpClient
  ) { }

   

  searchPlaces(data): Observable<any> {
    return this.http.post<any>(environment.get_places, data).pipe(tap(res => {
      console.log(res);
    }));
  }

  getLocation(data):Observable<any>{
    return this.http.post<any>(environment.location, data).pipe(tap(res => {
      console.log(res);
    }));
  }

  addVendor(data):Observable<any>{
    return this.http.post<any>(environment.addVendor, data).pipe(tap(res => {
      console.log(res);
    }));
  }

}
