import { Component } from '@angular/core';
import { Subject, filter, switchMap } from 'rxjs';
import { Driver } from 'src/app/model/driver.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  private season = new Subject<number>();

  drivers$ = this.season.asObservable().pipe(
    filter(Boolean),
    switchMap((year) => this.driversSrv.fetchDrivers(year))
  );

  constructor(private driversSrv: ApiService) {}

  handleSeason(year: number) {
    this.season.next(year);
  }

  trackById(_index: number, driver: Driver) {
    return driver.code;
  }
}
