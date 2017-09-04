import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// MODEL
import { User } from './user';

@Injectable()
export class ModelUserService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getUser(): Promise<User[]> {
    return this.http.get('http://localhost:3000/api/users')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://localhost:3000/api/auth', { username: username, password: password })
        .map((response: Response) => {
            console.log(response.json());
            if (response.json().status == 'success') {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: response.json().user.username, email: response.json().user.email }));
                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
