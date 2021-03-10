import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../app-service';
import {Router,ActivatedRoute} from '@angular/router'
import { SharedServiceService } from '../../../../shared/shared-service.service';
import { TransactionsService} from './../../transactions.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  
  transactionId:any;
  transactionDetails:any;
  isChecked=false;

  constructor(public appservice:AppService,public router:Router,public route:ActivatedRoute,
        public sharedService:SharedServiceService,public service:TransactionsService) {
      sharedService.showTopBar=true;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.transactionId=params.transactionId
    })
    this.getTransaction()
  }

  updateTransaction(){
    const payload={
      name:this.transactionDetails.name,
      phone:this.transactionDetails.phone,
      amount:this.transactionDetails.amount,
      transactionType:this.transactionDetails.transactionType,
      transactionMode:this.transactionDetails.transactionMode,
      givenTo:this.transactionDetails.givenTo,
      receiveFrom:this.transactionDetails.receiveFrom,
      description:this.transactionDetails.description
    }
    console.log(payload)
    this.service.updateSpecifiedTransactionDetails(this.transactionId,payload).then((res)=>{
      if(res){
        const responce=JSON.parse(JSON.stringify(res))
        this.transactionDetails=responce.data;
        this.router.navigate(['users/transaction/history'])
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  deleteTransaction(){
    this.service.deleteSpecifiedTransactionDetails(this.transactionId).then((res)=>{
      if(res){
        this.router.navigate(['users/transaction/history'])
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  getTransaction(){
    this.service.getSpecifiedTransactionDetails(this.transactionId).then((res)=>{
      if(res){
        const responce=JSON.parse(JSON.stringify(res))
        this.transactionDetails=responce.data;
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

}
