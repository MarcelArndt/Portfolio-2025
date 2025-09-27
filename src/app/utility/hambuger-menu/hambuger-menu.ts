import { Component, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-hambuger-menu',
  imports: [],
  templateUrl: './hambuger-menu.html',
  styleUrl: './hambuger-menu.scss'
})
export class HambugerMenu {
@ViewChild('navigation', { static: true }) navigation!: ElementRef;
@ViewChild('menuToggle', { static: true })menuToggle!: ElementRef<HTMLInputElement>;

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
    if (!this.navigation.nativeElement || !this.menuToggle.nativeElement) {
      return; // noch nicht initialisiert
    }
    const naviElement = this.navigation.nativeElement;
    const toggleElement = this.menuToggle.nativeElement;
    const clickedInsideNav = naviElement.contains(event.target as Node);
    if (!clickedInsideNav && toggleElement.checked) {
      toggleElement.checked = false; 
    }
  }
}
