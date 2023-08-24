import { Injectable } from '@angular/core'
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
 
  private url="https://c930-181-231-122-56.ngrok-free.app/";
  constructor() {
    

   }
   getTotal(): Observable<any> {
     return this.http.get(this.http.get(this.url + '/total'))
      
  }
}

