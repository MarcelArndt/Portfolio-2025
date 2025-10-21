import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
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

  private isSwitchContent = new BehaviorSubject<isSwitch>( 
    {
      ok:false,
      forwards:true
    }
  );

  public isSwitchContent$ = this.isSwitchContent.asObservable();

  private nextComponent!:LightboxContent | null;


  public close() {
    this.isOpenSubject.next(false);
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
    this.isSwitchContent.next({ok:true, forwards:isforewards});
  }


  public doSwitchContent(){
    this.contentSubject.next(this.nextComponent);
  }


}
