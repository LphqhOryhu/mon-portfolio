import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionStageComponent } from './gestion-stage.component';

describe('GestionStageComponent', () => {
  let component: GestionStageComponent;
  let fixture: ComponentFixture<GestionStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionStageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
