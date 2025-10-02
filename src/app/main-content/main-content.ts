import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { PortfolioTransition } from '../portfolio-transition/portfolio-transition';
import { Portfolio } from '../portfolio/portfolio';

@Component({
  selector: 'app-main-content',
  imports: [HeroSection,AboutMe,Skills,PortfolioTransition,Portfolio ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
}


