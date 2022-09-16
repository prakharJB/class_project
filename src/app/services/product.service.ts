import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl+"product";

  constructor(private _http : HttpClient) {}


  save(obj : any){
    return this._http.post<any>(this.apiUrl, obj);
  }

  getAll(){
    return this._http.get<any>(this.apiUrl);
  }
  
  delete(obj : any){
    return this._http.delete<any>(this.apiUrl+"/"+obj._id);
  }

  getSingle(){
    //console.log(this.apiUrl+"/search/latest");
    return this._http.get<any>(this.apiUrl+"/search/latest");
  }
}
