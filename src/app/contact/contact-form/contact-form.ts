import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { LanguageSwitch } from '../../../service/language-switch';
import { LightboxService } from '../../utility/lightbox/lightbox-service';
import { DataProtection } from '../../data-protection/data-protection';
import { IconComponent } from '../../utility/icon/icon';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule, IconComponent],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  constructor(public languageService:LanguageSwitch, private lightboxService:LightboxService){}
  messageForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern("^[A-Za-zÄÖÜäöüß\\s'-]+$")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,}$")
    ]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    dataProtection : new FormControl('', [Validators.required]),
  });

  onSubmit(){
    if (this.messageForm.valid) {
      console.log('Form Data:', this.messageForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  openDateProtection(){
    this.lightboxService.open(DataProtection);
  }

}
