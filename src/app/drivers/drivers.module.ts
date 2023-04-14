import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers/drivers.component';
import { DriversRoutingModule } from './drivers.router';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule,
    PipesModule
  ],
  exports: [DriversRoutingModule],
})
export class DriversModule {}
