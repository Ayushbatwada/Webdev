import { Component, OnInit } from '@angular/core';
import { AppService } from './../../../../app-service';
import {Router,ActivatedRoute} from '@angular/router'
import { SharedServiceService } from './../../../../shared/shared-service.service';
import { TransactionsService} from './../../transactions.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {

  name='';
  phone='';
  amount='';
  transactionType='';
  transactionMode='';
  description='';
  receiveFrom='';
  givenTo='';
  loader=false;

  constructor(public appservice:AppService,public router:Router,public route:ActivatedRoute,
        public sharedService:SharedServiceService,public service:TransactionsService) {
      sharedService.showTopBar=true;
   }

  ngOnInit(): void {
  }

  createNewTransaction(){
    this.loader=true;
    const payload={
      name:this.name,
      phone:this.phone,
      amount:this.amount,
      transactionType:this.transactionType,
      transactionMode:this.transactionMode,
      givenTo:this.givenTo,
      receiveFrom:this.receiveFrom,
      description:this.description
    }
    this.service.createNewTransaction(payload).then((res)=>{
      if(res){
        this.router.navigate(['users/transaction/history'])
      }
      this.loader=false;
    }).catch((err)=>{
      console.log(err)
    })
  }

}
