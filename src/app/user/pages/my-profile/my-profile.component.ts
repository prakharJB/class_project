import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';


interface User{
  _id? : string,
  name? : string,
  password? : string,
  email? : string,
  contact? : string,
  gender? : string,
  city? : string,
  iat? : string,
  address? : string
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
   
  userInfo : User={}; 
 

  
  constructor(private _profile : ProfileService) 
    {this._profile.getUserInfo().subscribe(result=>{
      this.userInfo = result;
      //console.log(this.userInfo);
    })
    
  }
  ngOnInit(): void {
  }  

  


}
  

