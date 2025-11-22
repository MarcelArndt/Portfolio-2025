import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Type } from '@angular/core';

export interface LightboxContent<T = any> {
  component: Type<T>;
  inputs?: { [key: string]: any };
}

export interface isSwitch {
  ok:boolean,
  forwards:boolean
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  private contentSubject = new BehaviorSubject<LightboxContent | null>(null);
  public content$ = this.contentSubject.asObservable();

  private isAnimatingSubject = new BehaviorSubject<boolean>(false);
  public isAnimating$ = this.isAnimatingSubject.asObservable();

  private isSwitchContentSubject = new BehaviorSubject<isSwitch>( 
    {
      ok:false,
      forwards:true
    }
  );

  public isSwitchContent$ = this.isSwitchContentSubject.asObservable();
  private nextComponent!:LightboxContent | null;

  constructor() {
    document.addEventListener('lightbox:animating', (event: any) => {
      this.isAnimatingSubject.next(event.detail);
    });
  }

public close() {
  const isOnAnimationBool = this.getIsAnimating();
  if (!isOnAnimationBool) {
    this.isAnimatingSubject.next(true);
    this.isOpenSubject.next(false);
  }
}

public getIsAnimating() {
  return this.isAnimatingSubject.getValue();
}

  public resetContent(){
    this.contentSubject.next(null);
  }

  public open<T>(component: Type<T>, inputs?: { [key: string]: any }){
    this.contentSubject.next({ component, inputs });
    this.isOpenSubject.next(true);
  }

  public prepareSwitchContent<T>(component: Type<T>, inputs?: { [key: string]: any }, isforewards:boolean = true){
    this.nextComponent = {
      'component' : component,
      'inputs' : inputs,
    }
    this.isSwitchContentSubject.next({ok:true, forwards:isforewards});
  }

  public doSwitchContent(){
    this.contentSubject.next(this.nextComponent);
  }
  
}
