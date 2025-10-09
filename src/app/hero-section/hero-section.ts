import { Component,ViewChild,ElementRef, ViewChildren, QueryList, Input} from '@angular/core';
import { FollowingSpotlight } from '../utility/following-spotlight/following-spotlight';
import { LanguageSwitch } from '../../service/language-switch';
import { Texts } from '../../types/types';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeroSectionAnimation } from './gsap';
@Component({
  selector: 'app-hero-section',
  imports: [FollowingSpotlight, CommonModule ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {

  constructor(public elementRef: ElementRef, private languageService:LanguageSwitch ){}
  @Input() aboutMeSection!:ElementRef;
  @ViewChild('spotlightSection') spotlightSection!: ElementRef;
  @ViewChild('heroSection') heroSection !: ElementRef;
  @ViewChild('redTransition') redTransition !: ElementRef;
  @ViewChildren('moveableObject') moveableObjects!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('whiteTransition') whiteTransition!: ElementRef;
  texts!:Texts | null;

  maxShift = 10;
  private animationFrameId: number | null = null;
  private mouseX = 0;
  private mouseY = 0;




ngAfterViewInit() {
    this.moveableObjects.forEach(obj => {
      obj.nativeElement.style.transform = `translate(0px, 0px)`;
    });

    this.languageService.texts.subscribe(textObj => {
      this.texts = textObj
    });

    const gsapObj = {
          'heroSection' : this.heroSection.nativeElement,
          'whiteTransition' : this.whiteTransition.nativeElement,
          'aboutMeSection' : this.aboutMeSection.nativeElement,
          'redTransition' : this.redTransition.nativeElement,
        }
        HeroSectionAnimation (gsapObj);

  }

  onMouseMove(event: MouseEvent) {
    const rect = this.spotlightSection.nativeElement.getBoundingClientRect();
    this.mouseX = (event.clientX - rect.left) / rect.width;
    this.mouseY = (event.clientY - rect.top) / rect.height;

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => this.updatePositions());
    }
  }

  private updatePositions() {
    this.moveableObjects.forEach(obj => {
      const speedAttr = obj.nativeElement.dataset[`speed`];
      const speed = speedAttr ? parseFloat(speedAttr) : 20;

      const moveX = -this.mouseX * 2 * speed;
      const moveY = -this.mouseY * 2 * speed;

      if(window.innerWidth > 1200){
        obj.nativeElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
         obj.nativeElement.style.transform = `translate(calc(${moveX}px + 50%), ${moveY}px)`;
      }
     
    });

    this.animationFrameId = null;
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
