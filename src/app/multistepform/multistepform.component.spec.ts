import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepformComponent } from './multistepform.component';

describe('MultistepformComponent', () => {
  let component: MultistepformComponent;
  let fixture: ComponentFixture<MultistepformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultistepformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultistepformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
