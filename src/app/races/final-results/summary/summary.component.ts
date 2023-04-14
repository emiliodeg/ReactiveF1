import { Component, Input, OnChanges } from '@angular/core';
import { Result } from 'src/app/model/result.model';

const summaryInit = {
  finished: 0,
  extraLap: 0,
  accident: 0,
};

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnChanges {
  summary = { ...summaryInit };

  @Input() results: Result[] = [];

  ngOnChanges(): void {
    this.summary = this.results.reduce(
      (acum, curr) => {
        switch (curr.status.toLocaleLowerCase()) {
          case 'finished':
            acum.finished++;
            break;
          case '+1 lap':
            acum.extraLap++;
            break;
          case 'accident':
            acum.accident++;
            break;
        }

        return acum;
      },
      { ...summaryInit }
    );
  }
}
