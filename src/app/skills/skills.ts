import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { SkillSectionAnimation } from './gsap';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  @Input('aboutMeSection')aboutMeSection!:ElementRef;
  @ViewChild('textbox')textbox!:ElementRef;
  @ViewChild('skillbox')skillboxSection!:ElementRef;

  ngAfterViewInit(){
    const gsapObj = {
      'skillboxSection' : this.skillboxSection.nativeElement,
      'aboutMeSection' : this.aboutMeSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
    }
    SkillSectionAnimation(gsapObj);
  }

}
