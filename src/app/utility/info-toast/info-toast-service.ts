import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoToastService {

  private isOpen$ = new BehaviorSubject<boolean>(false);
  public isOpen = this.isOpen$.asObservable();

  private typeOfMessage:"error" | "info" = "info";

  private message$ = new BehaviorSubject<string>('');
  public message = this.message$.asObservable();

  setTypeOfMessage(type:"error" | "info"){
    this.typeOfMessage = type;
  }

  getCurrentTypeOfMessage(){
    return this.typeOfMessage
  }

  open(message:string){
    this.message$.next(message)
    this.isOpen$.next(true);
  }

  close(){
    this.isOpen$.next(false);
  }

  resetMessage(){
    this.message$.next('');
  }

}
