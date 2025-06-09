import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://localhost:7134/api/Auth'; 

  constructor(private http: HttpClient) {}

  Login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, {
      email: email,
      password: password
    });
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('jwt');
    return !!token;
  }

  logout(): void {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('userRole');
  }

  saveToken(token: string): void {
    sessionStorage.setItem('jwt', token);
    const decoded: any = jwtDecode(token);
    sessionStorage.setItem('userId', decoded.nameid);
    sessionStorage.setItem('userRole', decoded.role); 
  }

  getUserId(): string | null {
    try {
      return sessionStorage.getItem('userRole');
    } catch (e) {
      console.error('Invalid token:', e);
      return null;
    }
  }

  
  getUserRole(): string | null {
    return sessionStorage.getItem('userRole');
  }
}
