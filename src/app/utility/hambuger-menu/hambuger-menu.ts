import { Component, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { gsapScrollToSection } from './gsap';
import { GsapScrollToSectionType } from './gsap';
import { LanguageSwitch } from '../../../service/language-switch';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hambuger-menu',
  imports: [CommonModule],
  templateUrl: './hambuger-menu.html',
  styleUrl: './hambuger-menu.scss'
})
export class HambugerMenu {
  constructor(public languageService:LanguageSwitch , private router: Router,){}
@ViewChild('navigation', { static: true }) navigation!: ElementRef;
@ViewChild('menuToggle', { static: true })menuToggle!: ElementRef<HTMLInputElement>;

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
    this.closeMenu(event, false)
  }

  closeMenu(event: MouseEvent | null, force:boolean){
    if (!this.navigation.nativeElement || !this.menuToggle.nativeElement) {
      return; 
    }
    const naviElement = this.navigation.nativeElement;
    const toggleElement = this.menuToggle.nativeElement;
    if(event){
      const clickedInsideNav = naviElement.contains(event.target as Node);
      if (!clickedInsideNav && toggleElement.checked) {
        toggleElement.checked = false; 
      } 
    }
    else if (force) {
      toggleElement.checked = false; 
    }
  }

  toScrollToSection(obj:GsapScrollToSectionType){
    if (this.router.url !== '/' && this.router.url !== ''){
          this.router.navigate(['/']).then(() => {
        setTimeout(() => {
            gsapScrollToSection(obj);
            this.closeMenu(null, true);
        }, 100);
      })
    }
     else {
        gsapScrollToSection(obj);
       this.closeMenu(null, true);
    }
  }
}
