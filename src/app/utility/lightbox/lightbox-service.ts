import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Type } from '@angular/core';

export interface LightboxContent<T = any> {
  component: Type<T>;
  inputs?: { [key: string]: any };
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  private contentSubject = new BehaviorSubject<LightboxContent | null>(null);
  public content$ = this.contentSubject.asObservable();

  close() {
    this.isOpenSubject.next(false);
  }

  resetContent(){
    this.contentSubject.next(null);
  }

  open<T>(component: Type<T>, inputs?: { [key: string]: any }){
    this.contentSubject.next({ component, inputs });
    this.isOpenSubject.next(true);
  }

}
