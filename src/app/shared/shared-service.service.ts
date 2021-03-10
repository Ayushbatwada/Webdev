import { StorageServiceService } from './storage-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(public storageService:StorageServiceService) { }

  showTopBar:boolean=false;
}
