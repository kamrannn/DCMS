import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homedetail5PageRoutingModule } from './homedetail5-routing.module';

import { Homedetail5Page } from './homedetail5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homedetail5PageRoutingModule
  ],
  declarations: [Homedetail5Page]
})
export class Homedetail5PageModule {}
