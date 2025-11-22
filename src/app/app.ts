import { Component, signal, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headline } from './headline/headline';
import { LanguageSwitch } from '../service/language-switch';
import gsap from 'gsap';
import { InfoToast } from './utility/info-toast/info-toast';
import { Lightbox } from './utility/lightbox/lightbox';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headline, Lightbox, InfoToast, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private languageService:LanguageSwitch){}
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

  async ngInit(){
  }

  ngAfterViewInit(){
    this.checkWindowsSizeForPadding();
  }
}
