import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { AmplifyAngularModule, AmplifyService, AmplifyIonicModule } from 'aws-amplify-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  entryComponents: [
    
  ],
  declarations: [AboutPage],
  providers: [AmplifyService]
})
export class AboutPageModule {}
