import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
     
@Injectable()
export class AuthService {
  messages: string[] = [];

  isAuthenticated(){
    return false;
  }
}