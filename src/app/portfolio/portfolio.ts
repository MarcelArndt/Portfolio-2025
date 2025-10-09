import { Component, ViewChild, ElementRef, AfterViewInit, Input, HostListener, NgZone, } from '@angular/core';
import { portfolioAnimation } from './gsap';
import { ProjectTemplate } from '../project-template/project-template';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectTemplate],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
constructor(public elementRef: ElementRef, private ngZone: NgZone) {}
@Input()skillSection!:ElementRef;
@Input()contactSection!:ElementRef;
@ViewChild('projectContainer')projectContainer!:ElementRef;
@ViewChild('transistionTextBlock')transistionTextBlock!:ElementRef;
@ViewChild('arrowSymbol')arrowSymbol!:ElementRef;
@ViewChild('mouseSymbol')mouseSymbol!:ElementRef;
@ViewChild('projectOne')projectOne!:ElementRef;
@ViewChild('projectTwo')projectTwo!:ElementRef;
@ViewChild('projectThree')projectThree!:ElementRef;
@ViewChild('whiteOverlay')whiteOverlay!:ElementRef;
@ViewChild('redOverlay')redOverlay!:ElementRef;

gsapObj!:Record<string, HTMLElement>;

ngAfterViewInit(){
  this.gsapObj={
    'projectContainer': this.projectContainer.nativeElement,
    'contactSection': this.contactSection.nativeElement,
    'transistionTextBlock': this.transistionTextBlock.nativeElement,
    'arrowSymbol': this.arrowSymbol.nativeElement,
    'mouseSymbol': this.arrowSymbol.nativeElement,
    'skillSection': this.skillSection.nativeElement,
    'projectOne': this.projectOne.nativeElement,
    'projectTwo': this.projectTwo.nativeElement,
    'projectThree': this.projectThree.nativeElement,
    'whiteOverlay': this.whiteOverlay.nativeElement,
    'redOverlay': this.redOverlay.nativeElement,
  }


    setTimeout(()=>{
      ScrollTrigger.refresh();
      portfolioAnimation(this.gsapObj);
    },500)

}

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;

  }

}
