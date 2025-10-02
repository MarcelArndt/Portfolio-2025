import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTransition } from './portfolio-transition';

describe('PortfolioTransition', () => {
  let component: PortfolioTransition;
  let fixture: ComponentFixture<PortfolioTransition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTransition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTransition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
