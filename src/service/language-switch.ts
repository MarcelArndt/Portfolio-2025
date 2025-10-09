import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Texts } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitch {

  private isSwitchLanguage:boolean = true;
  private translations$ = new BehaviorSubject<Texts | null>(null);
  public texts = this.translations$.asObservable();
  private currentLanguage$ =new BehaviorSubject<"ger" | "eng">("ger");
  public currentLanguage = this.currentLanguage$.asObservable();
  constructor(private http: HttpClient) {this.loadTexts("ger")}

 switchLanguage(){
    this.isSwitchLanguage = !this.isSwitchLanguage;
    const newLanguage = this.isSwitchLanguage? "ger" : "eng";
    this.currentLanguage$.next(newLanguage )
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
