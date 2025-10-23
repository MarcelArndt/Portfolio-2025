import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface data{
  name: string,
  email: string,
  message: string | null
}

@Injectable({
  providedIn: 'root'
})
export class ContactExpressJSService {
   private apiUrl = 'https://contact-express.arndt-dev.de';
  constructor(private http: HttpClient) {}

  sendMessage(data:data): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, data);
  }
  
}
