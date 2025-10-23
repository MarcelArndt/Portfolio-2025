import { Component, ViewChild, ElementRef} from '@angular/core';
import { InfoToastService } from './info-toast-service';
import { toastCloseAnimation, toastOpenAnimation } from './info-toast-gsap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-toast',
  imports: [CommonModule],
  templateUrl: './info-toast.html',
  styleUrl: './info-toast.scss'
})
export class InfoToast {
  constructor(public infoToast:InfoToastService){}

  @ViewChild('toast')toast!:ElementRef;
  @ViewChild('toastContent')toastContent!:ElementRef;

  gsapObj={};
  timeoutId: number | null = null;

  ngAfterViewInit(){
    this.gsapObj = {
      'toast' : this.toast.nativeElement,
      'toastContent' : this.toastContent.nativeElement,
    }

    this.infoToast.isOpen.subscribe((isOpen)=>{
      if(isOpen){
        this.clearTimeOut();
        toastOpenAnimation(this.gsapObj);
        this.timeoutId = setTimeout(()=>{
          this.closeToast();
        },5000);
      }
    });

  }

  clearTimeOut(){
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }


  async closeToast(){
    this.clearTimeOut();
    this.infoToast.close();
    await toastCloseAnimation(this.gsapObj).then(()=>{
    this.infoToast.resetMessage();
    });
  }

}
