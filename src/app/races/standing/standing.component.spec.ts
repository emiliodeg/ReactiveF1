import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingComponent } from './standing.component';
import { By } from '@angular/platform-browser';

describe('StandingComponent', () => {
  let component: StandingComponent;
  let fixture: ComponentFixture<StandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show an error message when there is NOT input data`, () => {
    component.standing = null;
    fixture.detectChanges();
    
    const content = fixture.debugElement.query(By.css('.alert-warning'));
    
    expect(content).toBeTruthy();
  });
  
  it(`should NOT show an error message when there is input data`, () => {
    component.standing = [];
    fixture.detectChanges();
    
    const content = fixture.debugElement.query(By.css('.alert-warning'));

    expect(content).toBeFalsy();
  });
});
