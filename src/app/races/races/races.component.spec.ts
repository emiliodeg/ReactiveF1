import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeasonSelectorComponent } from 'src/app/shared/season-selector/season-selector.component';
import { RaceSelectorComponent } from '../race-selector/race-selector.component';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let fixture: ComponentFixture<RacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RacesComponent,
        SeasonSelectorComponent,
        RaceSelectorComponent,
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
