import { Injectable } from '@angular/core';
import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { GlobalfunctionsService } from '../globalfunctions.service'
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  private apiUrl = 'http://44.215.31.70:5002/api/v1'; // Replace with your API URL
  private userIp
  private browserType
  constructor(private http: HttpClient, public globalService: GlobalfunctionsService,public router: Router, private activeRoute: ActivatedRoute) {
    this.globalService.getUserIpAddress().subscribe((data:any) => {
      this.userIp = data?.ip
    })
    this.browserType = this.globalService.getBrowserType();
  }

    gethostCategoryMaster() {
      let header = {Authorization: 'Bearer ' + window.localStorage.getItem('auth_token')}
      return this.http.get(`${this.apiUrl}/host/gethostCategoryMaster`,{headers: header});
    }
    createHostBasicInfo(data:any) {
      let header = {Authorization: 'Bearer ' + window.localStorage.getItem('auth_token')}
      return this.http.post(`${this.apiUrl}/host/createHostBasicInfo`,data,{headers: header});
    }

}
