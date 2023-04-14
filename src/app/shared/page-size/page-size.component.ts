import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss'],
})
export class PageSizeComponent {
  @Output() pageSizeChange = new BehaviorSubject<number>(10);

  @Input() pageSizes: number[] = [10, 15, 25];

  handleChange(selectedSeason: Event) {
    const { value } = selectedSeason.target as HTMLSelectElement;

    this.pageSizeChange.next(Number(value));
  }
}
