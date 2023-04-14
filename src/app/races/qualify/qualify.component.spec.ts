import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualifyComponent } from './qualify.component';
import { By } from '@angular/platform-browser';
import { PageSizeComponent } from 'src/app/shared/page-size/page-size.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

describe('QualifyComponent', () => {
  let component: QualifyComponent;
  let fixture: ComponentFixture<QualifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualifyComponent, PageSizeComponent],
      imports: [PipesModule]
    }).compileComponents();

    fixture = TestBed.createComponent(QualifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should NOT show a data table when there is NO data`, () => {
    component.qualify = [];
    fixture.detectChanges();

    const content = fixture.debugElement.query(By.css('table'));

    expect(content).toBeFalsy();
  });

  it(`should show a data table with 1 row`, () => {
    component.qualify = [
      {
        number: '',
        position: '',
        Driver: {
          code: '',
          dateOfBirth: new Date(),
          driverId: '',
          familyName: '',
          givenName: '',
          nationality: '',
          permanentNumber: '',
          url: '',
        },
        Constructor: {
          constructorId: '',
          url: '',
          name: '',
          nationality: '',
        },
        Q1: '',
        Q2: '',
        Q3: '',
      },
    ];
    fixture.detectChanges();

    const content = fixture.debugElement.query(By.css('table'));

    expect(content).toBeTruthy();
  });
});
