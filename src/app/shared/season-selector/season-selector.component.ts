import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-season-selector',
  templateUrl: './season-selector.component.html',
  styleUrls: ['./season-selector.component.scss'],
})
export class SeasonSelectorComponent {
  @Output() seasonChange = new EventEmitter<number>();

  readonly seasons: ReadonlyArray<number> = new Array(5).fill(2018).map((year, index) => year + index);

  handleChange(selectedSeason: Event) {
    const { value } = selectedSeason.target as HTMLSelectElement;
    this.seasonChange.emit(Number(value));
  }
}
