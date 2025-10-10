import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Texts } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitch {
  constructor(private http: HttpClient) {this.loadTexts("ger")}

  private isSwitchLanguage:boolean = true;
  private translations$ = new BehaviorSubject<Texts | null>(null);
  private currentLanguage$ =new BehaviorSubject<"ger" | "eng">("ger");

  public texts = this.translations$.asObservable();
  public currentLanguage = this.currentLanguage$.asObservable();

 switchLanguage(){
    this.isSwitchLanguage = !this.isSwitchLanguage;
    const newLanguage = this.isSwitchLanguage? "ger" : "eng";
    this.currentLanguage$.next(newLanguage);
    this.loadTexts(newLanguage);
  }

  loadTexts(language:"ger" | "eng"){
    const url = `/assets/text/text-${language}.json`
    this.http.get<Texts>(url).subscribe({
      next: (data) => this.translations$.next(data),
      error: (error) => console.log(error)
     });
  }
}
