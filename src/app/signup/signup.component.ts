import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public router:Router,public authService:AuthService) { }

  email;
  password;
  name;

  ngOnInit(): void {
  }

  signup(){
    const payload={
      email:this.email,
      password:this.password,
      name:this.name
    }
    this.authService.signup(payload).then((res)=>{
      this.router.navigate(['login'])
    })
  }

}
