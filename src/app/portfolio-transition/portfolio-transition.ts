import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { portfolioTransitionSectionAnimation } from './gsap';

@Component({
  selector: 'app-portfolio-transition',
  imports: [],
  templateUrl: './portfolio-transition.html',
  styleUrl: './portfolio-transition.scss'
})
export class PortfolioTransition {
  @ViewChild('mouse')mouseElement!:ElementRef;
  @ViewChild('arrow')arrowElement!:ElementRef;
  @ViewChild('textbox')textbox!:ElementRef;
  @ViewChild('portfolioTransitionSection')portfolioTransitionSectionElement!:ElementRef;
  @Input() skillSection!:ElementRef;

  ngAfterViewInit(){
    const gsapObj = {
      'mouse': this.mouseElement.nativeElement,
      'arrow': this.arrowElement.nativeElement,
      'skillSection': this.skillSection.nativeElement,
      'textbox': this.textbox.nativeElement,
      'portfolioTransitionSection': this.portfolioTransitionSectionElement.nativeElement,
    }

    portfolioTransitionSectionAnimation(gsapObj);
  }
}
