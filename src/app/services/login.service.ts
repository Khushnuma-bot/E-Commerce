import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/Ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;
  loggedIn = new BehaviorSubject(this.user);
  constructor(private http:HttpClient) { }
  private url = 'http://localhost:5000/api' //connected to the node
  isLoggedIn(): boolean {
    console.log(this.loggedIn);
    return true;
  }
  login(loginData:any){
    return this.http.post<any>('http://localhost:5000/api/login', loginData)
  }
  signup(data:any){
    return this.http.post<any>('http://localhost:5000/api/signup' , data);
  }

  isLogged(){
    return !!localStorage.getItem('token')
  }
}