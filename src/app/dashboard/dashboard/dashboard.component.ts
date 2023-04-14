import { Component } from '@angular/core';

interface Card {
  title: string;
  icon: string;
  url: string[]
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cards: Card[] = [
    {title: 'Drivers', icon: '🚗', url: ['drivers']},
    {title: 'Races', icon: '🏁', url: ['races']},
  ]
}
