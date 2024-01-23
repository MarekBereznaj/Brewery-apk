import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreweriesPageRoutingModule } from './breweries-routing.module';

import { BreweriesPage } from './breweries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreweriesPageRoutingModule
  ],
  declarations: [BreweriesPage]
})
export class BreweriesPageModule {}
