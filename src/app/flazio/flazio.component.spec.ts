import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlazioComponent } from './flazio.component';

describe('FlazioComponent', () => {
  let component: FlazioComponent;
  let fixture: ComponentFixture<FlazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlazioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
