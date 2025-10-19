import { Component, Input, HostBinding, SimpleChanges} from '@angular/core';
import { LightboxService } from '../utility/lightbox/lightbox-service';
import { Texts, Project, HSLTuple } from '../../types/types';
import { ChangeDetectorRef } from '@angular/core'
@Component({
  selector: 'app-project-template',
  imports: [],
  templateUrl: './project-template.html',
  styleUrl: './project-template.scss'
})
export class ProjectTemplate {
constructor(private lightboxService:LightboxService, private cdr: ChangeDetectorRef) {}

color!:HSLTuple | undefined;
@Input({required:true}) projectClass!:'project-one' | 'project-two' | 'project-three' | '';
@Input({required:true}) projectDetails!:Project | undefined;


iconsUrlCatalog:Record<string, string> = {
    'angular' : "./assets/technology/angular.svg",
    'javascript' : "./assets/technology/javascript.svg",
    'typescript' : "./assets/technology/typescript.svg",
    'gsap' : "./assets/technology/gsap.png",
    'sass' : "./assets/technology/sass.svg",
    'django' : "./assets/technology/django.svg",
    'python' : "./assets/technology/python.svg",
    'firebase' : "./assets/technology/firebase.svg",
    'figma' : "./assets/technology/figma.svg",
    'csharp' : "./assets/technology/c_scharp.svg",
    'git' : "./assets/technology/git.svg",
    'docker' : "./assets/technology/docker.svg",
    'unity' : "./assets/technology/unity.svg",
  }

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
    return this.projectClass || '';
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

  openLightbox(){
    this.lightboxService.open();
  }

}
