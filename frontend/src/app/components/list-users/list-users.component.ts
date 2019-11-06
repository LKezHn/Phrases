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
  newUserData = { first_name: "", last_name: "", phone_number: ""};

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

  createUser(){
    this.userService.createUser(this.newUserData).subscribe(
      data =>{
        this.users.push(data);
      },
      err =>{
        console.log(err);
      }
    )
  };

  submitInfo(f_name: HTMLInputElement, l_name: HTMLInputElement, phone: HTMLInputElement){
    this.newUserData["first_name"] = f_name.value;
    this.newUserData["last_name"] = l_name.value;
    this.newUserData["phone_number"] = phone.value;

    this.createUser()

    f_name.value = "";
    l_name.value = "";
    phone.value = "";
    

  }
}

