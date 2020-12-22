import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homedetail5Page } from './homedetail5.page';

const routes: Routes = [
  {
    path: '',
    component: Homedetail5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homedetail5PageRoutingModule {}
