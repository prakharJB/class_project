import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  type = "category";
  allCat : any= [];
  cate : any;

  constructor(private _cat : CategoryService) {
    this._cat.getAll().subscribe(result=>{
      this.allCat=result;
    });
  
  }

  ngOnInit(): void {
  }


  askDelete(obj : any){

    this.cate = obj;
  }

  delete(btn : any){
    this._cat.deleteData(this.cate).subscribe(result=>{
      //console.log(result)

      let n = this.allCat.indexOf(this.cate);
      this.allCat.splice(n, 1);

      btn.click();
    })
  }



}
