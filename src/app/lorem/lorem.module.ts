import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoremPageRoutingModule } from './lorem-routing.module';

import { LoremPage } from './lorem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoremPageRoutingModule
  ],
  declarations: [LoremPage]
})
export class LoremPageModule {}
