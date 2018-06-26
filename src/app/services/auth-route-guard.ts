import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Events } from '@ionic/angular'

@Injectable()
export class AuthGuardService implements CanActivate {

  signedIn: boolean = false;

  constructor(public router: Router, public events: Events) {
    this.events.subscribe('data:AuthState', async (data) => {
      if (data.loggedIn){
        this.signedIn = true;
      } else {
        this.signedIn =false
      }
    })
  }
  
  canActivate() {
    return this.signedIn;
  }
}