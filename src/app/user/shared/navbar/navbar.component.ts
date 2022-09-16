import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  allCate : any = [];

  constructor(private _cate : CategoryService) { 
    this._cate.getAll().subscribe(result=>{
      this.allCate = result;
    })
   }

  ngOnInit(): void {
  }

}
