import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { icon_lpdp } from 'src/app/core/common/constant'

//dumy
import { UserService } from 'src/app/core/helpers/user_data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iconLpdp = icon_lpdp;
  username: string = '';
  password: string = '';

  userData: any[] = [];

  constructor(private userService: UserService, private router: Router,) { 
    this.userService.getUsers().then((data) => {this.userData = data})
  }

  ngOnInit(): void {
  }

  submitAction() {

    const checkLogin = this.userData.find(user => user.username === this.username);
    if (checkLogin) {

        window.sessionStorage.removeItem('user'); //for dummy
        window.sessionStorage.setItem('user', JSON.stringify(checkLogin)); //for dummy

        this.router.navigate(['/dashboard']);
    }

  }

}
