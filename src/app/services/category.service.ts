import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.apiUrl+"category";

  constructor(private _http : HttpClient) { }

  save(obj : any){
    return this._http.post<any>(this.apiUrl,obj);
  }

  getAll(){
    return this._http.get<any>(this.apiUrl);
  }

  deleteData(obj : any){
    return this._http.delete<any>(this.apiUrl+"/"+obj._id );
  }

  getSingleData(id : any){
    return this._http.get<any>(this.apiUrl+"/"+id)
  }

  update(id:any, obj : any){
    return this._http.put<any>(this.apiUrl+"/"+id , obj)
  }
};
