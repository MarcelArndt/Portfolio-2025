import { Component } from '@angular/core';
import { IconComponent } from '../utility/icon/icon';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
