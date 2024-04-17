import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUsarResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http  = inject(HttpClient);
  private baseUrl : string = 'https://reqres.in/api/users';


  getUserById(id : number): Observable<User>{
    return this.http.get<SingleUsarResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map(response => response.data),
      tap(console.log)
    )
  }


}
