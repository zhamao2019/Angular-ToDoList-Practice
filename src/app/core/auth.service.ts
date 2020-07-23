import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginWithCredentials(username:string, password:string) {
    if (username === '1') {
      return true;
    } else {
      return false;
    }
    
  }
}
