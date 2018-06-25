import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
    });
  }
}
