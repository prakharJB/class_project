import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl+"auth";

  constructor(
    private _http : HttpClient,
    private _router : Router) { }

  save(obj : any){
    return this._http.post<any>(this.apiUrl,obj)
  }

  isLoggedIn(){
    if(localStorage.getItem("token"))
    {
      return true;
    }else{
      return false;
    }
  }

  getName(){
    return localStorage.getItem("name")
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    
  //  this._router.navigate(["/login"]);
  }
}
