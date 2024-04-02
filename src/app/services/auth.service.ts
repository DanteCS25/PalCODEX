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
}
