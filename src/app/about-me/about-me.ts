import { Component, AfterViewInit, ViewChild, ElementRef, Input, ViewChildren, QueryList} from '@angular/core';
import { IconComponent } from '../utility/icon/icon';
import { CommonModule } from '@angular/common';
import { whiteboxGrowAnimation, aboutMeTextAnimation } from './gsap';
import { LanguageSwitch } from '../../service/language-switch';


@Component({
  selector: 'app-about-me',
  imports: [IconComponent, CommonModule ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  constructor(public elementRef: ElementRef, public languageService: LanguageSwitch) {}
  textCurrentIndex:number = 0;
  @ViewChild("aboutMe")aboutMe!:ElementRef;
  @ViewChild("textbox")textbox!:ElementRef;
  @ViewChild("blackTransition")blackTransition!:ElementRef;
  @ViewChildren('textblock') textblockQuery!: QueryList<ElementRef>;
  @Input()heroSection!:ElementRef;
  @Input()skillSection!:ElementRef;
  gsapObj!:Record<string, HTMLElement | HTMLElement[]>;

  ngAfterViewInit() {
    this.gsapObj = {
      'aboutMe' : this.aboutMe.nativeElement,
      'heroSection' : this.heroSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
      'skillSection' : this.skillSection.nativeElement,
      'blackTransition' : this.blackTransition.nativeElement,
      'textblockQuery' : this.textblockQuery.map(eachElement => eachElement.nativeElement)
    };
    whiteboxGrowAnimation(this.gsapObj);
    aboutMeTextAnimation(this.gsapObj, this.textCurrentIndex)
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  changeTextIndex(index:number){
     this.textCurrentIndex = index;
     aboutMeTextAnimation(this.gsapObj, this.textCurrentIndex)
  }


}
