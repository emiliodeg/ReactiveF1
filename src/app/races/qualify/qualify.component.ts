import { Component, Input } from '@angular/core';
import { Qualify } from 'src/app/model/qualify.model';

@Component({
  selector: 'app-qualify',
  templateUrl: './qualify.component.html',
  styleUrls: ['./qualify.component.scss'],
})
export class QualifyComponent {
  @Input() qualify: Qualify[] | null = [];
}
