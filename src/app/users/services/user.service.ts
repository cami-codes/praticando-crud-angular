import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseUpdate, ResponseUserId, ResponseUsers } from 'src/app/model/user.model';
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

  getUserId(id: string): Observable<ResponseUserId> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseUserId>(_url);
  }

  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.post<ResponseUpdate>(_url, request);
  }
}
