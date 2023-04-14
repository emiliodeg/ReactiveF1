import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject, filter, switchMap } from 'rxjs';
import { Race } from 'src/app/model/circuit.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-race-selector',
  templateUrl: './race-selector.component.html',
  styleUrls: ['./race-selector.component.scss'],
})
export class RaceSelectorComponent {
  @Input() season!: number;

  @Output() raceChange = new EventEmitter<Race>();

  private race = new Subject<number>();

  readonly races$ = this.race.asObservable().pipe(
    filter(Boolean),
    switchMap((year) => this.apiSrv.fetchCircuits(year))
  );

  constructor(private apiSrv: ApiService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes?.['season']) return;

    this.race.next(changes['season'].currentValue);
  }

  handleRaceChange(race: Race) {
    this.raceChange.next(race);
  }
}
