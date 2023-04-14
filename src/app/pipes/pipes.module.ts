import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { JoinPipe } from './join.pipe';

@NgModule({
  declarations: [FullNamePipe, JoinPipe],
  exports: [FullNamePipe, JoinPipe],
  imports: [CommonModule],
})
export class PipesModule {}
