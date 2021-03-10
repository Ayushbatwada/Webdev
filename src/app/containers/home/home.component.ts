import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app-service';
import {Router,ActivatedRoute} from '@angular/router'
import { SharedServiceService } from './../../shared/shared-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public service:AppService,public router:Router,public route:ActivatedRoute,public sharedService:SharedServiceService) {
    sharedService.showTopBar=true;
  }

  ngOnInit(): void {
  }

}
