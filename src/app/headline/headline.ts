import { Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { HambugerMenu } from '../utility/hambuger-menu/hambuger-menu';

@Component({
  selector: 'app-headline',
  imports: [HambugerMenu],
  templateUrl: './headline.html',
  styleUrl: './headline.scss'
})
export class Headline {

  lastScrollTop!:number
  @ViewChild('headline') headline!:ElementRef;
  deltaForTrigger:number = 3;


@HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < this.lastScrollTop && (window.innerHeight / this.deltaForTrigger) < currentScroll) {
      this.headline.nativeElement.classList.add('shrink');
    }
    else{
      this.headline.nativeElement.classList.remove('shrink');
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  }
}

