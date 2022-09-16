import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

constructor(
  private _auth : AuthService,
  private _router : Router
){}


canActivate(){
  if(localStorage.getItem("token")){
    return true;
  }
  else{
    this._router.navigate(["/login"]);
    return false;
  }
}
}
