import { Component } from '@angular/core';
import {
  Subject,
  catchError,
  combineLatest,
  filter,
  forkJoin,
  of,
  switchMap,
} from 'rxjs';
import { Race } from 'src/app/model/circuit.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent {
  private season = new Subject<number>();
  private race = new Subject<Race>();

  season$ = this.season.asObservable().pipe(filter(Boolean));

  results$ = combineLatest([this.season, this.race]).pipe(
    switchMap(([season, { round }]) =>
      forkJoin({
        result: this.apiSrv
          .fetchFinalResults(season, round)
          .pipe(catchError(() => of(null))),
        qualify: this.apiSrv
          .fetchQualify(season, round)
          .pipe(catchError(() => of(null))),
        standing: this.apiSrv
          .fetchDriverStanding(season, round)
          .pipe(catchError(() => of(null))),
      })
    )
  );

  constructor(private apiSrv: ApiService) {}

  handleSeason(year: number) {
    this.season.next(year);
  }

  handleRace(race: Race) {
    this.race.next(race);
  }
}
