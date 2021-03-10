import { StorageServiceService } from './../../shared/storage-service.service';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient,public storageService:StorageServiceService) { }

    rootURL = 'http://localhost:3000/api';

    getHeader(){
      let userData = this.storageService.getItemFromStorage()
      if(userData){
        userData = JSON.parse(userData)
        const jwt = userData['token']
        let headers = this.getHeaderWithoutToken();
        if (jwt) {
          headers = headers.append('X-Access-Token', jwt);
        }
        console.log({headers})
        return {headers};
      }
    }

    getHeaderWithoutToken(){
      return new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
    }

    getTransactionHistory() {
      return this.http.get(this.rootURL + '/salary/transactions',this.getHeader()).toPromise();
    }

    createNewTransaction(payload:any) {
      return this.http.post(this.rootURL + '/salary/transaction/new',payload,this.getHeader()).toPromise();
    }

    getSpecifiedTransactionDetails(transactionId:any) {
      return this.http.get(this.rootURL +`/salary/transactions/${transactionId}`,this.getHeader()).toPromise();
    }

    deleteSpecifiedTransactionDetails(transactionId:any) {
      return this.http.delete(this.rootURL + `/salary/transactions/${transactionId}`,this.getHeader()).toPromise();
    }

    updateSpecifiedTransactionDetails(transactionId:any,payload:any) {
      return this.http.put(this.rootURL + `/salary/transactions/${transactionId}`,payload,this.getHeader()).toPromise();
    }

}
