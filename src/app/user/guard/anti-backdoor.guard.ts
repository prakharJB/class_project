import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {


  constructor( private _router : Router){}

  canActivate( ){ 

    if(localStorage.getItem("token")){
      this._router.navigate(["/my-profile"])
      return false;
    }
    else {
      return true;
    }
  }
  
  
}
