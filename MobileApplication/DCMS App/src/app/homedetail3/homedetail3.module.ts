import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homedetail3PageRoutingModule } from './homedetail3-routing.module';

import { Homedetail3Page } from './homedetail3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homedetail3PageRoutingModule
  ],
  declarations: [Homedetail3Page]
})
export class Homedetail3PageModule {}
