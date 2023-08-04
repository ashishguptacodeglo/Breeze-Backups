import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalfunctionsService {

  private apiUrl = 'https://api.ipify.org?format=json'; // IP geolocation API URL

  constructor(public http: HttpClient) { }

  getUserIpAddress = () => {
    return this.http.get(this.apiUrl)
  }
  
  getBrowserType = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) {
      return 'chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'firefox';
    } else if (userAgent.includes('Safari')) {
      return 'safari';
    } else if (userAgent.includes('Edge')) {
      return 'edge';
    } else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
      return 'ie';
    } else {
      return 'Unknown';
    }
  }  
}
