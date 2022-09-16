import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl ;

  constructor(private _http : HttpClient,
    private _router : Router) { }

  do_login(obj:any){
    return this._http.post<any>(this.apiUrl+"admin/auth",obj);
  }

  isAdminLoggedIn(){
    if(localStorage.getItem("admintoken")){
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("admintoken");
   // this._router.navigate(["/"]);

  }

}
