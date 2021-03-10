import { SharedServiceService } from './../../shared/shared-service.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  showOptions=false;

  constructor(public sharedService:SharedServiceService) {}

  @Input() showTopBar:boolean;
  @Input() firstName:String;
  @Output() userAction = new EventEmitter<String>()
  @Output() logoutAction = new EventEmitter()

  ngOnInit(): void {}

  navigateToHomePage(){
    this.userAction.emit('home')
  }

  navigateToTaskTrackerPage(){
    this.userAction.emit('taskTracker')
  }

  navigateToTransactionsPage(){
    this.userAction.emit('transactions')
  }

  expandOptionsSection(){
    this.showOptions=!this.showOptions;
  }

  logout(){
    this.showOptions=false;
    this.logoutAction.emit() 
  }

}
