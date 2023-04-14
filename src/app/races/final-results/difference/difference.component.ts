import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.scss'],
})
export class DifferenceComponent implements OnInit {
  @Input() start = 0;
  @Input() end = 0;
  
  difference: number = 0;

  ngOnInit(): void {
    this.difference = this.end - this.start
  }
}
