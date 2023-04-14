import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Driver } from '../model/driver.model';
import { ApiResponse } from '../model/response';
import { Race } from '../model/circuit.model';
import { Result } from '../model/result.model';
import { Qualify } from '../model/qualify.model';
import { Standing } from '../model/standing.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly base = 'http://ergast.com/api/f1';

  constructor(private httpClient: HttpClient) {}

  public fetchDrivers(season: number): Observable<Driver[]> {
    return this.httpClient
      .get<ApiResponse<{ DriverTable: { Drivers: Driver[] } }>>(
        `${this.base}/${season}/drivers.json`
      )
      .pipe(map((response) => response.MRData.DriverTable.Drivers));
  }

  public fetchCircuits(season: number): Observable<Race[]> {
    return this.httpClient
      .get<ApiResponse<{ RaceTable: { Races: Race[] } }>>(
        `${this.base}/${season}.json`
      )
      .pipe(map((response) => response.MRData.RaceTable.Races));
  }

  public fetchDriverStanding(
    season: number,
    race: number
  ): Observable<Standing[]> {
    return this.httpClient
      .get<
        ApiResponse<{
          StandingsTable: { StandingsLists: { DriverStandings: Standing[] }[] };
        }>
      >(`${this.base}/${season}/${race}/driverStandings.json`)
      .pipe(
        map(
          (response) =>
            response.MRData.StandingsTable.StandingsLists[0].DriverStandings
        )
      );
  }

  public fetchFinalResults(season: number, race: number): Observable<Result[]> {
    return this.httpClient
      .get<ApiResponse<{ RaceTable: { Races: { Results: Result[] }[] } }>>(
        `${this.base}/${season}/${race}/results.json`
      )
      .pipe(map((response) => response.MRData.RaceTable.Races[0].Results));
  }

  public fetchQualify(season: number, race: number): Observable<Qualify[]> {
    return this.httpClient
      .get<
        ApiResponse<{
          RaceTable: { Races: { QualifyingResults: Qualify[] }[] };
        }>
      >(`${this.base}/${season}/${race}/qualifying.json`)
      .pipe(
        map((response) => response.MRData.RaceTable.Races[0].QualifyingResults)
      );
  }
}
