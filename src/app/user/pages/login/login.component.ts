import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators}from'@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  pro:any;
  submitForm : FormGroup;
  checkForm = false;
  errMsg = "";
  check = false;
  


  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router,
    private _product : ProductService
  ) {
    this.submitForm = this._fb.group({
      email : ["",[Validators.required, Validators.email]],
      password : ["", Validators.required]
    })

    this._product.getSingle().subscribe(result=>{
      this.pro = result;
      //console.log(this.pro);
      this.check =  Object.keys(this.pro).length != 0
    })
   }

  ngOnInit(): void {
  }

  save(){
    if(this.submitForm.invalid){
      this.checkForm = true;
      return;
    }
    //console.log(this.submitForm.value);

    this._auth.save(this.submitForm.value).subscribe(result=>{
      //console.log(result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.name);
      this._router.navigate(["/"]);

    },err=>{
      console.log(err)
    if(err.error.type == 1){
      this.errMsg = "This Username & Password is Incorrect";
    }
    if(err.error.type == 2){

      this.errMsg = "This Password is Incorrect";
    }
    })
  }

  
}
