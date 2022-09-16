import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  updateData : FormGroup ;
  checkForm = false;

  constructor(private _fb : FormBuilder,
    private _profile : ProfileService,
    private _router : Router) 
    { 

      this.updateData = this._fb.group({
        _id : [""],
        password : [""],
        name : ["",Validators.required],
        email : ["",Validators.required],
        city : ["",Validators.required],
        address : ["",Validators.required],
        gender : ["",Validators.required],
        contact : ["",Validators.required],
      })
    
    this._profile.getUserInfo().subscribe(result=>{
     
      this.updateData.setValue(result);
    })
  }
  
  ngOnInit(): void {
  }
  
  
  
  
  update(){
    if(this.updateData.invalid){
      this.checkForm = true;
      return
    }
    
    //console.log(this.updateData.value)

    this._profile.updateUserInfo(this.updateData.value).subscribe(result=>{
      //console.log(result)

      this._router.navigate(["/my-profile"])

    })

  }
  

}
