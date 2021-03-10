import { StorageServiceService } from '../../../../shared/storage-service.service';
import { SharedServiceService } from '../../../../shared/shared-service.service';
import { AppService } from '../../../../app-service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { TransactionsService} from './../../transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionId:any;
  transactions=[];
  loader:boolean=true;

  constructor(public appservice:AppService,public router:Router,public route:ActivatedRoute,
      public sharedService:SharedServiceService,public storageService:StorageServiceService,public service:TransactionsService) { 
          sharedService.showTopBar=true;
  }

  ngOnInit(): void {
    this.getAllTransactions()
  }
  
  getAllTransactions(){
    this.loader=true;
    this.service.getTransactionHistory().then((res)=>{
      if(res){
        const responce=JSON.parse(JSON.stringify(res))
        this.transactions=responce.data;
        this.loader=false;
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  navigateToDetailPage(id:any){
    this.router.navigate(['users/transaction/detail'],{
      queryParams:{
        transactionId:id
      }
    });
  }

  createNewTransaction(){
    this.router.navigate(['users/new-transaction']);
  }
}
