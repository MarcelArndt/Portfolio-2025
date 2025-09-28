import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { AboutMe } from '../about-me/about-me';



@Component({
  selector: 'app-main-content',
  imports: [HeroSection,AboutMe ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
}


