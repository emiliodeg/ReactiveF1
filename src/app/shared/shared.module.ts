import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SeasonSelectorComponent } from './season-selector/season-selector.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SeasonSelectorComponent, PageSizeComponent],
  exports: [NavbarComponent, SeasonSelectorComponent, PageSizeComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
