import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { LanguageSwitch } from '../../../service/language-switch';
import { LightboxService } from '../../utility/lightbox/lightbox-service';
import { DataProtection } from '../../data-protection/data-protection';
import { IconComponent } from '../../utility/icon/icon';
import { ContactExpressJSService, data } from '../../../service/contact-express-js-service';
import { InfoToastService } from '../../utility/info-toast/info-toast-service';
import { Texts, Toast } from '../../../types/types';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule, IconComponent],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  constructor(public languageService:LanguageSwitch, private lightboxService:LightboxService, private contactService :ContactExpressJSService, private infoToast:InfoToastService ){}
  
  toastTexts!:Toast
  
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

 async onSubmit(){
    if (this.messageForm.valid) {
              const data:data = {
                name: this.messageForm.value.name!, 
                email: this.messageForm.value.email!, 
                message: this.messageForm.value.message!
              }
        const result = await firstValueFrom(this.contactService.sendMessage(data));
        if (result.success){
          await this.openToast(true);
        } else{
          await this.openToast(false);
        }
    } else {
      console.error("form is invalid!")
    }
  }

  openDateProtection(){
    this.lightboxService.open(DataProtection);
  }



  async openToast(emailWasSuccessfully: boolean) {

    const texts = await firstValueFrom(this.languageService.texts);
    this.toastTexts = texts?.toast!;
  
      if (emailWasSuccessfully) {
        this.infoToast.setTypeOfMessage("info");
        this.infoToast.open(this.toastTexts.emailSuccessful);
      } else {
        this.infoToast.setTypeOfMessage("error");
        this.infoToast.open(this.toastTexts.emailError);
      }      
  }
  
}

