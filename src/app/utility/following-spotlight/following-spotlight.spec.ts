import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingSpotlight } from './following-spotlight';

describe('FollowingSpotlight', () => {
  let component: FollowingSpotlight;
  let fixture: ComponentFixture<FollowingSpotlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingSpotlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingSpotlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
