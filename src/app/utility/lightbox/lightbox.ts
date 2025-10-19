import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LightboxService } from './lightbox-service';
import { closeLightboxAnimtion, openLightboxAnimtion } from './lightbox-gsap';


@Component({
  selector: 'app-lightbox',
  imports: [],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss'
})
export class Lightbox {
  constructor(private lightboxService:LightboxService ){}
  @ViewChild('wrapperBox') wrapperBox!:ElementRef;
  @ViewChild('backgound') backgound!:ElementRef;
  @ViewChild('content') content!:ElementRef;

  gsapObj = {};

  ngAfterViewInit(){
      this.gsapObj = {
        'wrapperBox' : this.wrapperBox.nativeElement,
        'backgound' : this.backgound.nativeElement,
        'content' : this.content.nativeElement,
      }

    this.lightboxService.isOpen$.subscribe((isOpen:boolean)=>{
        if(!isOpen){
          this.closeAnimtion()
        }
        if(isOpen){
          this.openAnimtion();
        }
      });
    }

  stopPropagation(event:Event){
    event.stopPropagation();
  }

  close(){
    this.lightboxService.close()
    closeLightboxAnimtion(this.gsapObj);
  }

  closeAnimtion(){
    closeLightboxAnimtion(this.gsapObj);
  }

  openAnimtion(){
    openLightboxAnimtion(this.gsapObj);
  }

}
