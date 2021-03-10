import { StorageServiceService } from './shared/storage-service.service';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { SharedServiceService } from './shared/shared-service.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'salaryTransactions';
  navigateTo;

  constructor(public sharedService:SharedServiceService,public authService:AuthService,
        public router:Router,public storageService:StorageServiceService){}

  ngOnInit(): void {
  }

  navigateToClickedComponent(value){

    switch(value){

      case 'home':
        this.navigateTo='users/home';
        break;

      case 'transactions':
        this.navigateTo='users/transaction/history';
        break; 
        
      case 'taskTracker':
        this.navigateTo='users/task-tracker';
        break; 

      default:
        this.navigateTo='users/home';
        break;
    }

    this.router.navigate([this.navigateTo])
  }
}
