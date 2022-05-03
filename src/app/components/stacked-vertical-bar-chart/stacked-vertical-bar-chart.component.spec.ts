import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StackedVerticalBarChartComponent } from './stacked-vertical-bar-chart.component';

describe('StackedVerticalBarChartComponent', () => {
  let component: StackedVerticalBarChartComponent;
  let fixture: ComponentFixture<StackedVerticalBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedVerticalBarChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StackedVerticalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
