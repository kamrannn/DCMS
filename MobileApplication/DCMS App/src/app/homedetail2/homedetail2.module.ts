import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homedetail2PageRoutingModule } from './homedetail2-routing.module';

import { Homedetail2Page } from './homedetail2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homedetail2PageRoutingModule
  ],
  declarations: [Homedetail2Page]
})
export class Homedetail2PageModule {}
