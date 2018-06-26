import { Component, AfterContentInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthGuardService } from '../../services/auth-route-guard'
import { AmplifyService }  from 'aws-amplify-angular';


@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements AfterContentInit{

  authState: any;
  // including AuthGuardService here so that it's available to listen to auth events
  authService: AuthGuardService
  amplifyService: AmplifyService

  constructor(
    public events: Events,
    public guard: AuthGuardService,
    public amplify: AmplifyService
  ) {
    this.authState = {loggedIn: false};
    this.authService = guard;
    this.amplifyService = amplify;
    this.amplifyService.authStateChange$
    .subscribe(authState => {
      this.authState.loggedIn = authState.state === 'signedIn';
      this.events.publish('data:AuthState', this.authState)
    });
  }

  ngAfterContentInit(){
    this.events.publish('data:AuthState', this.authState)
  }
}
