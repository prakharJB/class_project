import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  allPro : any = [];
  pro :any;
  type = "Product";

  constructor(private _product : ProductService) {

    this._product.getAll().subscribe(result=>{
      this.allPro = result  
    })
   }

  ngOnInit(): void {
  }
 
  askDelete(obj : any){
    this.pro = obj
  } 

  delete(btn : any){
    this._product.delete(this.pro).subscribe(result=>{
      //console.log(result)

      let n = this.allPro.indexOf(this.pro)
      this.allPro.splice(n,1);

      btn.click();
    })
  }

}
