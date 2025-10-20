import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLightboxTemplate } from './project-lightbox-template';

describe('ProjectLightboxTemplate', () => {
  let component: ProjectLightboxTemplate;
  let fixture: ComponentFixture<ProjectLightboxTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLightboxTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLightboxTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
