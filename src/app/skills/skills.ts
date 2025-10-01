import { Component, ViewChild, QueryList, ElementRef, Input, AfterViewInit, ViewChildren } from '@angular/core';
import { SkillSectionAnimation } from './gsap';

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
  @ViewChildren('skillSectionBox') skillSections!: QueryList<ElementRef>;

  ngAfterViewInit(){
    const gsapObj = {
      'skillboxSection' : this.skillboxSection.nativeElement,
      'aboutMeSection' : this.aboutMeSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
      'skillSectionsArray' : this.skillSections.map(eachElement => eachElement.nativeElement)
    }
    SkillSectionAnimation(gsapObj);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

}
