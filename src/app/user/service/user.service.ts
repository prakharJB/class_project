import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl+"user";

  constructor(private _http : HttpClient) { }

  save(obj:any){
    return this._http.post<any>(this.apiUrl,obj)
  }

  getAll(){
    return this._http.get<any>(this.apiUrl);
  }
}
