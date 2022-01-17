import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string

  constructor(private http: HttpClient) { }

  // Register request
  register(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/register', user)
  }

  // Login request
  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', user)
      .pipe(tap(
        ({ token }) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        }
      ))
  }

  // Save jwt metod
  setToken(token: string) {
    this.token = token
  }

  // Get jwt metod
  getToken(): string {
    return this.token
  }

  // Check if user is authoraized
  isAuthenticated(): boolean {
    return !!this.token
  }

  // Destroy token metod
  logout() {
    this.setToken(" ")
    localStorage.clear()
  }

}
