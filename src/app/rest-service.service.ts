import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RideData } from './book-ride/Ride';
import { UserData } from './login/User';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  public ride! : Observable<RideData[]>
  private rideUrl : string = '/assets/ride.json'
  private userUrl : string = '/assets/user.json'

  constructor(private http: HttpClient) { }
  
  getRideData() : any {
    this.ride = this.http.get<RideData[]>(this.rideUrl)
    return this.ride
  }

  getUserData() : Observable<UserData[]> {
    return this.http.get<UserData[]>(this.userUrl)
  }

  private isloggedIn = false;

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getUserData().pipe(
        map(users => {
            const Authenticateduser = users.find(user => (user.username === username) && (user.password === password));
            if (Authenticateduser) {
                this.isloggedIn = true;
            } else {
                this.isloggedIn = false;
            }
            return this.isloggedIn;
        })
    );
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
}
  
  addRideDetail(rideData : any) {
    this.ride.pipe(tap(usersList => {
      usersList.push(rideData);
    }));
    return this.ride
  }
}
