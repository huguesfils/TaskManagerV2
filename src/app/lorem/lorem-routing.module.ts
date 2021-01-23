import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoremPage } from './lorem.page';

const routes: Routes = [
  {
    path: '',
    component: LoremPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoremPageRoutingModule {}
