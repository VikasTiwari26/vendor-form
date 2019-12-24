import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post<any>(environment.location,data).pipe(tap(res=>{
      console.log(res);
    }))
  }

}
