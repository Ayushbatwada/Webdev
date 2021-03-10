import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  key="myData"

  getItemFromStorage(){
    return JSON.parse(JSON.stringify(localStorage.getItem(this.key))) || ''
  }

  setItemToStorage(value){
    localStorage.setItem(this.key,JSON.stringify(value))
  }

  removeItemFromStorage(){
    localStorage.removeItem(this.key)
  }

  getUserFirstName(){
    let userData = this.getItemFromStorage()
    if(userData){
        userData=JSON.parse(userData)
        if(userData['name']){
          return userData['name'].split(' ')[0]
      }
    }
  }
}
