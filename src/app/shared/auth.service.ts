import { StorageServiceService } from './storage-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient,public storageService:StorageServiceService) { }

  rootURL = 'http://localhost:3000/api';

  isLoggedIn(){
      let storageData = this.storageService.getItemFromStorage() ;
      if(storageData){
        storageData = JSON.parse(storageData)
        if(storageData['token']){
            return true;
        }else{
          return false
        }
      }else{ 
        this.logout()
        return false;
      }
  }

  login(payload){
    return this.http.post(this.rootURL + '/login/verify',payload).toPromise();
  }

  signup(payload){
    return this.http.post(this.rootURL + '/signup/new',payload).toPromise();
  }

  logout(){
      this.storageService.removeItemFromStorage();
      window.location.href=`/login`;
  }
}
