import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[];
  userInfo = {};

  constructor(private userService: UserServiceService) { }


  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.users = [];
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
    });
  }

  private getUserInfo(id: string){
    this.userService.getUserInfo(id).subscribe(
      res=>{
        console.log(res);
        this.userInfo = res;
      },
      err=>{
        alert('Id Inválido');
      }
    );
  }

  submitId(id : HTMLInputElement){
    this.getUserInfo(id.value);
    return false;
  }
}

