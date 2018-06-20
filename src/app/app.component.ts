import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { ServiceWorker, Analytics } from 'aws-amplify';

import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  serviceWorker:ServiceWorker = new ServiceWorker();
  registration: any;
  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async() => {
      this.statusBar.styleDefault();
       // Register the Service Worker
       this.registration = await this.serviceWorker.register();
       // Optionally enable Web Push
      //  this.subscription = await this.serviceWorker.enablePush(key)
      // this.splashScreen.hide();
    });
  }
}
