import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';
import { checkRePass, conNum, lengthCheck, nameCheck, nameUpper} from'../../../../app/helper/custom.validation';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData : FormGroup;
  checkForm = false ;

  constructor(private _fb : FormBuilder,
    private _user : UserService,
    private _router : Router) {
    this.userData = this._fb.group({
      name : ["",Validators.required],
      email : ["",[Validators.required,Validators.email]],
      password:["",Validators.required],
      re_password : ["",Validators.required],
      gender : ["",Validators.required],
      address : ["",Validators.required],
      city : ["",Validators.required],
      contact : ["",Validators.required]
    },
    {
      validator : [checkRePass(), conNum(), lengthCheck(), nameCheck(), nameUpper()]
    })



   }

  ngOnInit(): void {
  }

  save(){
   
    if(this.userData.invalid){
      this.checkForm= true;
      console.log("****error****")
      return;
    }

    //console.log(this.userData.value);

   this._user.save( this.userData.value).subscribe((result)=>{
    console.log(result);
    this._router.navigate(["/login"]);

   });
  }
}
