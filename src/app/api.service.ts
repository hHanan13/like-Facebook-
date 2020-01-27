import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getPOSTS():Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getCOMMENTS():Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/comments");

  }

  getPHOTOS():Observable<any>{

    return this._http.get("https://jsonplaceholder.typicode.com/photos");

  }
  getUSERS():Observable<any>
  {
   
    return this._http.get(" https://jsonplaceholder.typicode.com/users");
  }
}
