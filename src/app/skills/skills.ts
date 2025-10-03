import { Component, ViewChild, QueryList, ElementRef, Input, AfterViewInit, ViewChildren, HostListener } from '@angular/core';
import { SkillSectionAnimation } from './gsap';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  constructor(public elementRef: ElementRef) {}
  @Input('aboutMeSection')aboutMeSection!:ElementRef;
  @ViewChild('textbox')textbox!:ElementRef;
  @ViewChild('skillbox')skillboxSection!:ElementRef;
  @ViewChild('picture')picture!:ElementRef;
  @ViewChild('skillsContainer')skillsContainer!:ElementRef;
  @ViewChildren('skillSectionBox') skillSections!: QueryList<ElementRef>;
  gsapObj!:Record<string, HTMLElement | HTMLElement[]>;



  ngAfterViewInit(){
    const gsapObj = {
      'skillboxSection' : this.skillboxSection.nativeElement,
      'aboutMeSection' : this.aboutMeSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
      'picture' : this.picture.nativeElement,
      'skillSectionsArray' : this.skillSections.map(eachElement => eachElement.nativeElement)
    }
    SkillSectionAnimation(gsapObj);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }


}
