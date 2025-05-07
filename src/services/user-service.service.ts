// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserServiceService {

//   constructor() { }
// }




import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = 'https://angular-project-k9ux.onrender.com/api/auth/';
  constructor(private http: HttpClient) { }
  Login(email: string, password: string): Observable<any> {
    const user = { email, password }
    return this.http.post(`${this.baseUrl}login`, user).pipe(
      tap((response: any) => {
        if (response.token) {
          sessionStorage.setItem("token", response.token);
          localStorage.setItem('userId', response.userId)
          console.log(sessionStorage.getItem("token"));
          console.log(localStorage.getItem("userId"));
        }
      })
    )
  }
  signUp(name: string, email: string, password: string, role: string): Observable<any> {
    alert("service")
    const user = { name, email, password, role }
    console.log(user)
    return this.http.post(`${this.baseUrl}register `, user).pipe(
      tap((response: any) => {
        if (response.token) {
          sessionStorage.setItem("token", response.token)
          console.log(sessionStorage.getItem("token"));

        }
      })
    )
  }
}
