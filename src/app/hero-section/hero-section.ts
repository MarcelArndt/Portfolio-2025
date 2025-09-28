import { Component,ViewChild,ElementRef, ViewChildren, QueryList, Input} from '@angular/core';
import { FollowingSpotlight } from '../utility/following-spotlight/following-spotlight';
import { heroSectionAnimation } from './gsap';

@Component({
  selector: 'app-hero-section',
  imports: [FollowingSpotlight ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  @Input() aboutMeSection!:ElementRef;

  @ViewChild('spotlightSection') spotlightSection!: ElementRef;
  @ViewChild('redOverlay', { static:false }) redOverlay!: ElementRef;
  @ViewChild('whiteOverlay', { static:false }) whiteOverlay!: ElementRef;
  @ViewChild('heroSection', { static:false }) heroSection !: ElementRef;

  @ViewChildren('moveableObject') moveableObjects!: QueryList<ElementRef<HTMLElement>>;


  maxShift = 10;
  private animationFrameId: number | null = null;
  private mouseX = 0;
  private mouseY = 0;



ngAfterViewInit() {
    this.moveableObjects.forEach(obj => {
      obj.nativeElement.style.transform = `translate(0px, 0px)`;
    });


    const obj = {
      'redOverlay' : this.redOverlay.nativeElement,
      'whiteOverlay' : this.whiteOverlay.nativeElement,
      'heroSection': this.heroSection.nativeElement,
      'aboutMe': this.aboutMeSection.nativeElement,
    }
    heroSectionAnimation(obj);

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
}
