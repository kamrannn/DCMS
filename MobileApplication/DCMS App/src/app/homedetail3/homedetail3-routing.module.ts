import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homedetail3Page } from './homedetail3.page';

const routes: Routes = [
  {
    path: '',
    component: Homedetail3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homedetail3PageRoutingModule {}
