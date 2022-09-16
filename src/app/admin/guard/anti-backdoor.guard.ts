import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {

  constructor( private _router : Router){}

  canActivate() {
    if(localStorage.getItem("admintoken")){
      //console.log(localStorage)
      this._router.navigate(["/admin/dashboard"]);
      return false;
    }
    else{
      return true;
    }
  }
}
