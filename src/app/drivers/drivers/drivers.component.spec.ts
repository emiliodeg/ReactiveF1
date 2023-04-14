import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DriversComponent } from './drivers.component';
import { SeasonSelectorComponent } from 'src/app/shared/season-selector/season-selector.component';

describe('DriversComponent', () => {
  let component: DriversComponent;
  let fixture: ComponentFixture<DriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriversComponent, SeasonSelectorComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleSeason', () => {
    it('should emit a value', () => {
      const spy = spyOn(component['season'], 'next');

      component.handleSeason(73);

      expect(spy).toHaveBeenCalledWith(73);
    })
  })  
});
