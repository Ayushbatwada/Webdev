import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-top-bar',
  templateUrl: './home-top-bar.component.html',
  styleUrls: ['./home-top-bar.component.scss']
})
export class HomeTopBarComponent implements OnInit {

  constructor(public router:Router) { }



  ngOnInit(): void {
  }

  navigateToLogin(){
    this.router.navigate(['login'])
  }

  navigateToSignup(){
    this.router.navigate(['signup'])
  }

}
