import { Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import { portfolioAnimation } from './gsap';
import { ProjectTemplate } from '../project-template/project-template';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectTemplate],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
@Input()skillSection!:ElementRef;
@ViewChild('projectContainer')projectContainer!:ElementRef;
@ViewChild('transistionTextBlock')transistionTextBlock!:ElementRef;
@ViewChild('arrowSymbol')arrowSymbol!:ElementRef;
@ViewChild('mouseSymbol')mouseSymbol!:ElementRef;
@ViewChild('projectOne')projectOne!:ElementRef;
@ViewChild('projectTwo')projectTwo!:ElementRef;
@ViewChild('projectThree')projectThree!:ElementRef;

ngAfterViewInit(){
  const gsapObj={
    'projectContainer': this.projectContainer.nativeElement,
    'transistionTextBlock': this.transistionTextBlock.nativeElement,
    'arrowSymbol': this.arrowSymbol.nativeElement,
    'mouseSymbol': this.arrowSymbol.nativeElement,
    'skillSection': this.skillSection.nativeElement,
    'projectOne': this.projectOne.nativeElement,
    'projectTwo': this.projectTwo.nativeElement,
    'projectThree': this.projectThree.nativeElement,
  }

  portfolioAnimation(gsapObj);
}

}
