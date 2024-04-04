import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  //http url
  private loginUrl = 'http://localhost:3000/users/login'

  //login
  loginUser(email: string, password: string): Observable<boolean> {
    //make the http request, receive the response of user info, save user infp to sessionStorage
    return this.http.post<any>(this.loginUrl, { email, password }).pipe(
      tap(response => {
        if (response) {
          sessionStorage.setItem("user", JSON.stringify(response))
        }
      })
    );
  }

  //logout
  logOut() {
    sessionStorage.removeItem("user")
  }

  //checkif user logged

  //check user is admin

  getUserId(): number {
    // Implement logic to get the current user's ID
    return 1; // Placeholder, replace with actual user ID retrieval
  }

  getUserStatus(): string {
    // Example logic to get the user's status and append '_craft'
    // const status = 'novice'; // This should be dynamically determined
    const status = (sessionStorage.getItem('user')); // This should be dynamically determined
    console.log(JSON.parse(status!))
    return `${status}`;
  }
}
