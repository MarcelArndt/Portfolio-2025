import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambugerMenu } from './hambuger-menu';

describe('HambugerMenu', () => {
  let component: HambugerMenu;
  let fixture: ComponentFixture<HambugerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HambugerMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HambugerMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
