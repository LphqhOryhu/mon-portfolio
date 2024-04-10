import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackComponent } from './time-track.component';

describe('TimeTrackComponent', () => {
  let component: TimeTrackComponent;
  let fixture: ComponentFixture<TimeTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
