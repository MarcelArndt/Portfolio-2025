import { Component, ViewChild, QueryList, ElementRef, Input, AfterViewInit, ViewChildren, HostListener, NgZone, } from '@angular/core';
import { SkillSectionAnimation } from './gsap';
import { LanguageSwitch } from '../../service/language-switch';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  constructor(public elementRef: ElementRef, public languageService: LanguageSwitch) {}
  @Input()aboutMeSection!:ElementRef;
  @Input()portfolioSection!:ElementRef;
  @ViewChild('textbox')textbox!:ElementRef;
  @ViewChild('skillbox')skillboxSection!:ElementRef;
  @ViewChild('picture')picture!:ElementRef;
  @ViewChild('pictureContainer')pictureContainer!:ElementRef;
  @ViewChild('skillsContainer')skillsContainer!:ElementRef;
  @ViewChildren('skillSectionBox') skillSections!: QueryList<ElementRef>;
  gsapObj!:Record<string, HTMLElement | HTMLElement[]>;

  ngAfterViewInit(){
    this.gsapObj = {
      'skillboxSection' : this.skillboxSection.nativeElement,
      'portfolioSection' : this.portfolioSection.nativeElement,
      'aboutMeSection' : this.aboutMeSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
      'picture' : this.picture.nativeElement,
      'pictureContainer' : this.pictureContainer.nativeElement,
      'skillSectionsArray' : this.skillSections.map(eachElement => eachElement.nativeElement)
    }
    SkillSectionAnimation(this.gsapObj);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }


}
