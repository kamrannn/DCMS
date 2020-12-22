import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homedetail4PageRoutingModule } from './homedetail4-routing.module';

import { Homedetail4Page } from './homedetail4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homedetail4PageRoutingModule
  ],
  declarations: [Homedetail4Page]
})
export class Homedetail4PageModule {}
