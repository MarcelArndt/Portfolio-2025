import { Component, ElementRef, ViewChild, Input, viewChild} from '@angular/core';
import { IconComponent } from '../utility/icon/icon';
import { ContactForm } from './contact-form/contact-form'
import { contactAnimation } from './gsap';;
import { LanguageSwitch } from '../../service/language-switch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, ContactForm, CommonModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(public elementRef: ElementRef, public languageService:LanguageSwitch ) {}
  @ViewChild('textblock')textblock!:ElementRef;
  @ViewChild('button')button!:ElementRef;
  @ViewChild('form')form!:ElementRef;
  @ViewChild('contactSection')contactSection!:ElementRef;
  @Input()portfolioSection!:ElementRef;

  ngAfterViewInit(){
    const gsapObj={
      'textblock': this.textblock.nativeElement,
      'button': this.button.nativeElement,
      'form': this.form.nativeElement,
      'portfolioSection': this.portfolioSection.nativeElement,
      'contactSection': this.contactSection.nativeElement,
    }
     contactAnimation(gsapObj);
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
