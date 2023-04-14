import { Component, Input } from '@angular/core';
import { Standing } from 'src/app/model/standing.model';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
})
export class StandingComponent {
  @Input() standing: Standing[] | null = [];
}
