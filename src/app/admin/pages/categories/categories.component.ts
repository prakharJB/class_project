import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  catData : FormGroup;
  checkForm = false;
  id : any;


  constructor(
    private _fb : FormBuilder,
    private _cat : CategoryService,
    private _routes : Router,
    private _actroute : ActivatedRoute
  ) {
    this.catData = this._fb.group({
      name : ["", Validators.required]
    })

    this.id = this._actroute.snapshot.paramMap.get("id");
    //console.log(x)
    if(this.id){
      this._cat.getSingleData(this.id).subscribe(result=>{
      //  console.log(result)
        this.catData.controls['name'].setValue(result.name)
      })
    }
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.catData.invalid){
      this.checkForm = true;
      return;
    }
    
    if(this.id){
      this._cat.update(this.id,this.catData.value).subscribe(result=>{
       // console.log(result);
       this._routes.navigate(["./admin/categories/list"]);

      })
      
    }else{
      this._cat.save(this.catData.value) .subscribe((result)=>{
      //  console.log(result);
        this._routes.navigate(["./admin/categories/list"]);

      })
    }

    
  }

}
