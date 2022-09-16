import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  allUser : any = [];

  constructor(private _user : UserService) {
    this._user.getAll().subscribe(result=>{
      this.allUser = result;
    })
   }

  ngOnInit(): void {
  }

}
