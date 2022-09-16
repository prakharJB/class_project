import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPro : any = [];

  constructor(private _product : ProductService ) {
    this._product.getAll().subscribe(result=>{
      this.allPro = result;
    })
   }

  ngOnInit(): void {
  }

}
