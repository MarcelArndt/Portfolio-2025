import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { IconComponent } from '../utility/icon/icon';
import { CommonModule } from '@angular/common';
import { whiteboxGrowAnimation } from './gsap';


@Component({
  selector: 'app-about-me',
  imports: [IconComponent, CommonModule ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  constructor(public elementRef: ElementRef) {}
  textIndex:number = 0;
  @ViewChild("aboutMe")aboutMe!:ElementRef;
  @ViewChild("textbox")textbox!:ElementRef;
  @ViewChild("blackTransition")blackTransition!:ElementRef;
  @ViewChild("whiteTransition")whiteTransition!:ElementRef;
  @ViewChild("redTransition")redTransition!:ElementRef;
  @Input()heroSection!:ElementRef;
  @Input()skillSection!:ElementRef;

  ngAfterViewInit(): void {
    const gsapObj = {

      'aboutMe' : this.aboutMe.nativeElement,
      'heroSection' : this.heroSection.nativeElement,
      'textbox' : this.textbox.nativeElement,
      'skillSection' : this.skillSection.nativeElement,
      'blackTransition' : this.blackTransition.nativeElement,
      'whiteTransition' : this.whiteTransition.nativeElement,
      'redTransition' : this.redTransition.nativeElement,
    };
    whiteboxGrowAnimation(gsapObj);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  changeTextIndex(index:number){
    this.textIndex = index;
  }


}
