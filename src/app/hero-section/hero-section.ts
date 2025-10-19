import { Component,ViewChild,ElementRef, ViewChildren, QueryList, Input, viewChild, HostListener} from '@angular/core';
import { LanguageSwitch } from '../../service/language-switch';
import { Texts } from '../../types/types';
import { CommonModule } from '@angular/common';
import { HeroSectionAnimation } from './gsap';
import { gsapInitScrollFunktion } from './gsap';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  imports: [ CommonModule ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {


  constructor(public elementRef: ElementRef, public languageService:LanguageSwitch){}
  @Input() aboutMeSection!:ElementRef;
  @ViewChild('spotlightSection') spotlightSection!: ElementRef;
  @ViewChild('heroSection') heroSection !: ElementRef;
  @ViewChild('headlineTextBox') headlineTextBox !: ElementRef;
  @ViewChild('redTransition') redTransition !: ElementRef;
  @ViewChild('portrait') portrait !: ElementRef;
  @ViewChildren('moveableObject') moveableObjects!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('whiteTransition') whiteTransition!: ElementRef;
  @ViewChild('mobilSocialNavi') mobilSocialNavi!:ElementRef;
  @ViewChild('mouseSymbol') mouseSymbol!:ElementRef;
  @ViewChild('arrowSymbol') arrowSymbol!:ElementRef;

  texts!:Texts | null;
  ngAfterViewInit() {
    const gsapObj = {
          'arrowSymbol': this.arrowSymbol.nativeElement,
          'mouseSymbol' : this.mouseSymbol.nativeElement,
          'mobilSocialNavi': this.mobilSocialNavi.nativeElement,
          'heroSection' : this.heroSection.nativeElement,
          'whiteTransition' : this.whiteTransition.nativeElement,
          'aboutMeSection' : this.aboutMeSection.nativeElement,
          'redTransition' : this.redTransition.nativeElement,
          'headlineTextBox': this.headlineTextBox.nativeElement,
          'portrait' : this.portrait.nativeElement,
        }
        HeroSectionAnimation (gsapObj);

        gsapInitScrollFunktion(gsapObj);
  }

  startScrollAnimation(){
     const gsapObj = {
        'arrowSymbol': this.arrowSymbol.nativeElement,
        'mouseSymbol' : this.mouseSymbol.nativeElement,
     }
    gsapInitScrollFunktion(gsapObj);
  }

  scrollAboutMe(){
    window.scroll(0, 400);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
