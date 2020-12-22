import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homedetail4Page } from './homedetail4.page';

const routes: Routes = [
  {
    path: '',
    component: Homedetail4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homedetail4PageRoutingModule {}
