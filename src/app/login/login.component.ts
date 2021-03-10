import { StorageServiceService } from './../shared/storage-service.service';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  name;
  
  constructor(public router:Router,public authService:AuthService,public storageService:StorageServiceService) { }

  ngOnInit(): void {
  }

  login(){
    const payload = {
      email:this.email,
      password:this.password
    }
    this.authService.login(payload).then((res)=>{
        let responce=JSON.parse(JSON.stringify(res))
        if(responce){  
          responce=responce.data;
          const userData = {
             'token': responce.token,
             'name':responce.name,
             'email':responce.email,
             'userId':responce._id
          }
          this.storageService.setItemToStorage(userData)
          this.router.navigate(['users/home'])
        }
    }).catch((err)=>{})  
  }
}
