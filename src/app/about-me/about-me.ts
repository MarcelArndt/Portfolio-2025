import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { IconComponent } from '../utility/icon/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  imports: [IconComponent, CommonModule ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  constructor(public elementRef: ElementRef) {}
  textIndex:number = 0;

  ngAfterViewInit(): void {
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  changeTextIndex(index:number){
    this.textIndex = index;
  }


}
