import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headline } from './headline/headline';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headline],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
