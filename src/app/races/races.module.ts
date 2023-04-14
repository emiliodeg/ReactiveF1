import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './races/races.component';
import { RacesRoutingModule } from './races.router';
import { SharedModule } from '../shared/shared.module';
import { RaceSelectorComponent } from './race-selector/race-selector.component';
import { FormsModule } from '@angular/forms';
import { FinalResultsComponent } from './final-results/final-results.component';
import { PipesModule } from '../pipes/pipes.module';
import { SummaryComponent } from './final-results/summary/summary.component';
import { DifferenceComponent } from './final-results/difference/difference.component';
import { QualifyComponent } from './qualify/qualify.component';
import { StandingComponent } from './standing/standing.component';

@NgModule({
  declarations: [RacesComponent, RaceSelectorComponent, FinalResultsComponent, SummaryComponent, DifferenceComponent, QualifyComponent, StandingComponent],
  imports: [
    CommonModule,
    PipesModule,
    RacesRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class RacesModule {}
