import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app-service';
import {Router,ActivatedRoute} from '@angular/router'
import { SharedServiceService } from '../../../shared/shared-service.service';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {

  constructor(public service:AppService,public router:Router,public route:ActivatedRoute,public sharedService:SharedServiceService) {
    sharedService.showTopBar=true;
  }

  ngOnInit(): void {
  }

}
