import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-side-content',
  imports: [RouterOutlet, Footer ],
  templateUrl: './side-content.html',
  styleUrl: './side-content.scss'
})
export class SideContent {

}
