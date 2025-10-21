import { Component, Input, HostBinding, SimpleChanges} from '@angular/core';
import { LightboxService } from '../utility/lightbox/lightbox-service';
import { Texts, Project, HSLTuple } from '../../types/types';
import { ChangeDetectorRef } from '@angular/core'
import { ProjectLightboxTemplate } from '../project-lightbox-template/project-lightbox-template';
import { iconsUrlCatalog } from '../utility/iconsUrlCatalog';

@Component({
  selector: 'app-project-template',
  imports: [],
  templateUrl: './project-template.html',
  styleUrl: './project-template.scss'
})
export class ProjectTemplate {
constructor(private lightboxService:LightboxService, private cdr: ChangeDetectorRef) {}

color!:HSLTuple | undefined;
@Input({required:true}) projectID!:'projectOne' | 'projectTwo' | 'projectThree';
@Input({required:true}) projectDetails!:Project | undefined;
icons = iconsUrlCatalog


  @HostBinding('style.--box-color')
  get boxColor() {
    return this.adjustColor(this.color!, 0, 0, 0);
  }

  @HostBinding('style.--box-color-shadow')
  get boxColorshadow() {
    return this.adjustColor(this.color!, 10, -40, -30);
  }

  @HostBinding('style.--box-color-background')
  get boxColorDark() {
    return this.adjustColor(this.color!, 25, -35, -50);
  }

  @HostBinding('class')
  get hostClasses() {
    return this.projectID;
  }

  ngOnChanges(changes: SimpleChanges) {
  if (changes['projectDetails']) {
    this.color = this.projectDetails?.colorHSL
    this.cdr.markForCheck();
  }
}



  private adjustColor(hsl: HSLTuple, hueShift:number = 0, saturationShift:number = 0, lightnessShift:number = 0) {
    if(!hsl) return;
    const [h, s, l] = hsl;
    const newH = (h + hueShift) % 360;
    const newS = Math.min(100, Math.max(0, s + saturationShift));
    const newL = Math.min(100, Math.max(0, l + lightnessShift));
    return `hsl(${newH}deg ${newS}% ${newL}%)`;
  }

  openLightbox(projectindex:string){
    this.lightboxService.open(ProjectLightboxTemplate, {projectData: this.projectDetails, projectID: projectindex});
  }

}
