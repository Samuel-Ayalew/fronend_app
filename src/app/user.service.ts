

import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http:localhost:80808/api/users";
  constructor(private http:HttpClient){}
  getUsers():Observable<User []>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

}
