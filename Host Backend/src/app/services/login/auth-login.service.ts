import { Injectable } from '@angular/core';
import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { GlobalfunctionsService } from '../globalfunctions.service'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthLoginService {
  private apiUrl = 'http://44.215.31.70:5002/api/v1'; // Replace with your API URL
  private userIp
  private browserType
  LoginRoutes : any = ["/login",'/login/reset-password','/signup','/login/forgot-password','/','/login/new-password'];
  constructor(private http: HttpClient, public globalService: GlobalfunctionsService,public router: Router, private activeRoute: ActivatedRoute) {
    this.globalService.getUserIpAddress().subscribe((data:any) => {
      this.userIp = data?.ip
    })
    this.browserType = this.globalService.getBrowserType()
  }

  hostLogin = (email: any, password: any) => {
    const body = {email: email,password: password,ipaddress: this.userIp,browser: this.browserType};
    return this.http.post(`${this.apiUrl}/hostLogin`, body);
  }

  hostSignup = (name: string, email: string, password: string) => {
    const body = { name, email, password };
    return this.http.post(`${this.apiUrl}/hostSignUp`, body);
  }

  SendResetPasswordLink = (body) => {
    return this.http.post(`${this.apiUrl}/sendVerifyEmail`, body);
  }
  resetPassword = (body,auth) => {
    let header = {Authorization: 'Bearer ' + auth}
    return this.http.patch(`${this.apiUrl}/resetPassword`,body,{headers: header})
  }
   logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  sendVerificationEmail() {
    return this.http.post(`${this.apiUrl}/hostVerifyEmail`,{})
  }

  confirmEmailVerification(auth:any) {
    let header = {Authorization: 'Bearer ' + auth}
    return this.http.patch(`${this.apiUrl}/hostVerifyEmail`,{},{headers: header})
  }


  is_authendicated(url:any):boolean {
      let is_loggedin = window.localStorage.getItem('auth_token') ? true : false;
      let userData:any  = window.localStorage.getItem('auth_data');
      userData = userData ? JSON.parse(userData) : '';  
     if(!is_loggedin) {
       var index = this.LoginRoutes.indexOf(url);
      if(index < 0 ) {
         this.router.navigate(['/']);
      }
     }else{
       return true;
     }
   
    return true;
  }


}
