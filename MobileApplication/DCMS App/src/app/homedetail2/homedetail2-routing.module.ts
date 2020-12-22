import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homedetail2Page } from './homedetail2.page';

const routes: Routes = [
  {
    path: '',
    component: Homedetail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homedetail2PageRoutingModule {}
