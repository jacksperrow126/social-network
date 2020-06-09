import { UserForSignIn, UserForRegister } from './../interface/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://conduit.productionready.io/api';
  currentUser = new BehaviorSubject<User>(null);
  token: string;
  constructor(private http: HttpClient) {}

  // Save current user in local storage
  saveCurrentUser() {
    return localStorage.setItem('currentUserToken', this.token);
  }

  // Check if current user was stored on device
  checkLocalStorage() {
    const userToken = localStorage.getItem('currentUserToken');
    if (userToken) {
      return true;
    }
    return false;
  }

  // Delete current user on local storage
  deleteCurrentUser() {
    return localStorage.removeItem('currentUserToken');
  }

  // Log In method using post with 2 params: email, password
  logIn(formValue: UserForSignIn) {
    return this.http.post<User>(this.API_URL + '/users/login', {
      user: formValue
    });
  }

  // Register
  register(formValue: UserForRegister) {
    return this.http.post(this.API_URL + '/users', {
      user: formValue
    });
  }

  // Get user data
  getUser(token: string) {
    return this.http.get<User>(this.API_URL + '/user', {
      headers: {
        authorization: 'Token' + ' ' + token
      }
    });
  }
}
