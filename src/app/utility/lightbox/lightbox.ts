import { Component, ViewChild, ElementRef, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { LightboxService, LightboxContent } from './lightbox-service';
import { closeLightboxAnimtion, fadeInContent, fadeOutContent, openLightboxAnimtion } from './lightbox-gsap';
import { isSwitch } from './lightbox-service';


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
  @ViewChild('host', { read: ViewContainerRef }) host!: ViewContainerRef;

  private createdComponentRef: ComponentRef<any> | null = null;

  gsapObj = {};


  initLightBoxService(){
    this.lightboxService.isOpen$.subscribe((isOpen:boolean)=>{
        if(!isOpen){
          this.closeAnimtion().then(()=>{
            this.clearHost();
          });
        }
        if(isOpen){
          this.openAnimtion();
        }
      });


    this.lightboxService.isSwitchContent$.subscribe((isSwitching:isSwitch)=>{
      if (isSwitching.ok){

        this.fadeOutContentAnimation(isSwitching.forwards).then(() =>{
          
        this.lightboxService.doSwitchContent();
          this.fadeInContentAnimation(isSwitching.forwards).then(()=>{
        });
        });
      }
    })
  }

  initComponentService(){
      this.lightboxService.content$.subscribe((content: LightboxContent | null) => {
      this.clearHost();
      if(content && this.host){
        const cmpRef = this.host.createComponent(content.component as any);
        if(content.inputs){
          Object.keys(content.inputs).forEach(key => {
            try{
              (cmpRef.instance as any)[key] = content.inputs![key];
            }catch(e){
            }
          });
        }
        try{ cmpRef.changeDetectorRef.detectChanges(); }catch(e){}
        this.createdComponentRef = cmpRef;
      }
    });
  }

  async ngAfterViewInit(){
      this.gsapObj = {
        'wrapperBox' : this.wrapperBox.nativeElement,
        'backgound' : this.backgound.nativeElement,
        'content' : this.content.nativeElement,
      }
     this.initLightBoxService();
     this.initComponentService()
  }

  ngOnDestroy(): void {
    this.clearHost();
  }

  stopPropagation(event:Event){
    event.stopPropagation();
  }

  async close(){
    this.lightboxService.close()
    await closeLightboxAnimtion(this.gsapObj);
    this.clearHost();
    this.lightboxService.resetContent();
  }

  async closeAnimtion(){
    await closeLightboxAnimtion(this.gsapObj);
  }

  async fadeOutContentAnimation(isforewards:boolean){
     await fadeOutContent(this.gsapObj, isforewards);
  }

  async fadeInContentAnimation(isforewards:boolean){
     await fadeInContent(this.gsapObj, isforewards);
  }

  openAnimtion(){
    openLightboxAnimtion(this.gsapObj);
  }

  switchAnimtion(){

  }

  private clearHost(){
    if(this.createdComponentRef){
      try{ this.createdComponentRef.destroy(); }catch(e){}
      this.createdComponentRef = null;
    }
    if(this.host){
      try{ this.host.clear(); }catch(e){}
    }
  }

}
