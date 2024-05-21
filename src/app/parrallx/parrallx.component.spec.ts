import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrallxComponent } from './parrallx.component';

describe('ParrallxComponent', () => {
  let component: ParrallxComponent;
  let fixture: ComponentFixture<ParrallxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrallxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParrallxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
