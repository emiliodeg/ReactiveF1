import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'drivers',
    loadChildren: () =>
    import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'races',
    loadChildren: () =>
    import('./races/races.module').then((m) => m.RacesModule),
  },
  {
    path: '**',
    loadChildren: () =>
    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
