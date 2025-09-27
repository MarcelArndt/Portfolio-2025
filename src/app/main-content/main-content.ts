import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';

@Component({
  selector: 'app-main-content',
  imports: [HeroSection ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
