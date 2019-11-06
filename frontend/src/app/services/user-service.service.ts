import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl =  "http://localhost:8000/api/v1/user/users";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let users: User[] = [];
          res.forEach(object => {
            let user = new User(object.id, object.first_name, object.last_name, object.phone_number);
            users.push(user)
          });
          return users;
        })
      );
  }

  public getUserInfo(id: string){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 
  
  public createUser(obj: {}){
    return this.http.post(`${this.apiUrl}/`,obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    })
}
}

  

