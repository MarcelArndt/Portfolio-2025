import { Component, HostListener, ViewChild, ElementRef} from '@angular/core';
import { HambugerMenu } from '../utility/hambuger-menu/hambuger-menu';
import { LanguageSwitch } from '../../service/language-switch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headline',
  imports: [HambugerMenu],
  templateUrl: './headline.html',
  styleUrl: './headline.scss'
})
export class Headline {
  constructor(private languageService: LanguageSwitch, private router:Router){}
  lastScrollTop!:number
  @ViewChild('headline') headline!:ElementRef;
  deltaForTrigger:number = 3;
  currentLanguage!: "ger" | "eng";


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

  ngOnInit(){
    this.languageService.currentLanguage.subscribe((newLangauge)=>{
      this.currentLanguage = newLangauge;
    });
    }


  switchLanguage() {
    this.languageService.switchLanguage();
  }

  scrollToTop(){
    if (this.router.url !== '/' && this.router.url !== ''){
              this.router.navigate(['/']).then(() => {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 500);
          })
        }
         else {
             window.scroll(0, 0);
        }
    }
}

