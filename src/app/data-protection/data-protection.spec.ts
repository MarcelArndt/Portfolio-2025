import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtection } from './data-protection';

describe('DataProtection', () => {
  let component: DataProtection;
  let fixture: ComponentFixture<DataProtection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProtection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProtection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
