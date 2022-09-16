import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = environment.apiUrl+"profile";

  constructor(private _http : HttpClient) { }

  getUserInfo(){
    return this._http.get(this.apiUrl,{
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("token"))
      }
    });
  };

  updateUserInfo(obj : any){
    return this._http.post<any>(this.apiUrl,obj,{
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("token"))
      }
    });
  };

  
};
