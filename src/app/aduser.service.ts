import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUser } from './components/profile/AdUser';

@Injectable({
  providedIn: 'root'
})
export class AduserService {

  uri = 'http://localhost:4000/adusers';

  constructor(private http: HttpClient) { }

  addAdUser(user_nick, user_pass) {
    const obj = {
      user_nick: user_nick,
      user_pass: user_pass
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUsers() {
    return this
           .http
           .get(`${this.uri}`);
}
}
