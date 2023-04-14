import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonSelectorComponent } from './season-selector.component';

describe('SeasonSelectorComponent', () => {
  let component: SeasonSelectorComponent;
  let fixture: ComponentFixture<SeasonSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleChange', () => {
    it('should emit a number', () => {
      const spy = spyOn(component.seasonChange, 'emit');
      const season = 2023;

      component.handleChange({
        target: { value: season } as any,
      } as Event);

      expect(spy).toHaveBeenCalledOnceWith(season);
    });
  });
});
