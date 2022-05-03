import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupedHorizontalBarChartComponent } from './grouped-horizontal-bar-chart.component';

describe('GroupedHorizontalBarChartComponent', () => {
  let component: GroupedHorizontalBarChartComponent;
  let fixture: ComponentFixture<GroupedHorizontalBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedHorizontalBarChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupedHorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
