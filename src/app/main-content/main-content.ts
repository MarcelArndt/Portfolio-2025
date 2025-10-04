import { Component} from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-content',
  imports: [HeroSection,AboutMe,Skills,Portfolio,Contact,Footer  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}


