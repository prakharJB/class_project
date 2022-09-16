import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  proForm : FormGroup;
  checkForm = false;
  category : any =[];

  constructor(private _fb : FormBuilder,
    private _cate : CategoryService,
    private _product : ProductService,
    private _router : Router) 
    
  {this.proForm = this._fb.group({
      name :  ["",Validators.required],
      price : [null,Validators.required],
      details : ["",Validators.required],
      discount : [null,Validators.required],
      category : ["",Validators.required],
      image : ["",Validators.required]
      


  })

  this._cate.getAll().subscribe(result=>{
    this.category = result;
  })
  }

  ngOnInit(): void {
  }

  submit(file : any){
    if(this.proForm.invalid){
      this.checkForm = true;
      return
    }
    let fileinfo = file.files[0];
    let form = new FormData;

    this.proForm.controls['price'].setValue(parseInt(this.proForm.controls['price'].value));
    this.proForm.controls['discount'].setValue(parseInt(this.proForm.controls['discount'].value));

    form.append("photo",fileinfo)
    form.append("proinfo",JSON.stringify(this.proForm.value));
    
    //console.log(this.proForm.value)

  
   this._product.save(form).subscribe(result=>{
     // console.log(result);
      this._router.navigate(["/admin/product/view-products"])
   })
  }

}
