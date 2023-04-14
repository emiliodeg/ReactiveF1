import { Component, Input } from '@angular/core';
import { Result } from 'src/app/model/result.model';

@Component({
  selector: 'app-final-results',
  templateUrl: './final-results.component.html',
  styleUrls: ['./final-results.component.scss'],
})
export class FinalResultsComponent {
  @Input() results: Result[] | null = [];
}
