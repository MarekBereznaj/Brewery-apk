import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreweryCityPageRoutingModule } from './brewery-city-routing.module';

import { BreweryCityPage } from './brewery-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreweryCityPageRoutingModule
  ],
  declarations: [BreweryCityPage]
})
export class BreweryCityPageModule {}
