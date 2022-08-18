import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseUsers } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { ResponseCreate } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

}
