import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable()
export class AuthGuardService implements CanActivate {

  amplifyService: AmplifyService;
  signedIn: boolean;

  constructor(public amplify: AmplifyService, public router: Router) {
    this.amplifyService = amplify;
  }
  
  async canActivate() {
    return await this.amplifyService.auth().currentSession() ? true : false
  }
}