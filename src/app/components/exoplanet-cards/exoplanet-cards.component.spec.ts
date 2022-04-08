import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetCardsComponent } from './exoplanet-cards.component';

describe('ExoplanetCardsComponent', () => {
  let component: ExoplanetCardsComponent;
  let fixture: ComponentFixture<ExoplanetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoplanetCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
