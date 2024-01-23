import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreweryCityPage } from './brewery-city.page';

const routes: Routes = [
  {
    path: '',
    component: BreweryCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreweryCityPageRoutingModule {}
