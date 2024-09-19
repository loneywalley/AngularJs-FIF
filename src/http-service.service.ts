import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiUrl: string = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee'

  constructor(
    private http: HttpClient
  ) { 
    getData(){
      
    }
   }
}
