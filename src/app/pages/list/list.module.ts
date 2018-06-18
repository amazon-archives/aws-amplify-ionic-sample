import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
import { ListItemModal } from './list.item.modal';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ListPage,
    ListItemModal
  ],
  entryComponents: [
   ListItemModal
  ],
  providers: []
})
export class ListModule {}
