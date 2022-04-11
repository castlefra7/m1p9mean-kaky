import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export interface Auth {
  token: string,
  role: number,
  name: string,
  restau_id: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(name: string, password: string): Observable<Auth> {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.post<Auth>(
      `${environment.url}/users/login`,
      { name, password }
      , options);
  }

  restauId(): String {
    var auth = JSON.parse(localStorage.getItem('auth')!);
    return auth.restau_id;
  }

  name(): String {
    var auth = JSON.parse(localStorage.getItem('auth')!);
    if(auth != null)
    return auth.name;
    return "";
  }

  logout(): void {
    localStorage.removeItem('auth');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/signin');
  }

  isRestaurant(): boolean {
      var auth = JSON.parse(localStorage.getItem('auth')!);
      return auth.role == 2;
  }

  isDeliver(): boolean {
    var auth = JSON.parse(localStorage.getItem('auth')!);
    return auth.role == 3;
  }

  isAdmin(): boolean {
    var auth = JSON.parse(localStorage.getItem('auth')!);
    return auth.role == 0;
  }

  isCustomer(): boolean {
    var auth = JSON.parse(localStorage.getItem('auth')!);
    return auth.role == 1;
  }

  isLogged(): boolean {
    return localStorage.getItem('auth') != null;
  }
}
