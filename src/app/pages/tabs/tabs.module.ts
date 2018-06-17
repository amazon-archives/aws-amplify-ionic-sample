import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { ListModule } from '../list/list.module';
import { HomePageModule } from '../home/home.module';

import { AuthGuardService } from '../../services/auth-route-guard'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ListModule,
    ContactPageModule
  ],
  declarations: [TabsPage],
  providers: [AuthGuardService]
})
export class TabsPageModule {}
