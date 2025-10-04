import { Component, signal, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headline } from './headline/headline';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headline,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Marcel Arndt Portfolio');
  @ViewChild('mainBody')mainBody!:ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.checkWindowsSizeForPadding();
  }

  checkWindowsSizeForPadding(){
    if (window.innerWidth > 1920){
      this.mainBody.nativeElement.classList.add('add-padding');
    } else {
        this.mainBody.nativeElement.classList.remove('add-padding');
    }
  }

  ngAfterViewInit(){
    this.checkWindowsSizeForPadding();
  }
}
