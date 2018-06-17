import { Component } from '@angular/core';
import { Events } from '@ionic/angular'
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor( public amplifyService: AmplifyService, public events: Events) {

      this.amplifyService = amplifyService;

      this.amplifyService.authStateChange$
      .subscribe(authState => {
        events.publish('data:AuthState', authState)
      });

  }
}
