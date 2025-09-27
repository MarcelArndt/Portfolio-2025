import { Component} from '@angular/core';
import { HambugerMenu } from '../utility/hambuger-menu/hambuger-menu';

@Component({
  selector: 'app-headline',
  imports: [HambugerMenu],
  templateUrl: './headline.html',
  styleUrl: './headline.scss'
})
export class Headline {
}
