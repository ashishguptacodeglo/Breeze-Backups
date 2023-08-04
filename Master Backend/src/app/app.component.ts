import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menu : boolean = false;
  is_loggedin:boolean = window.localStorage.getItem('auth_token') ? true : false;  
  
  constructor() { 
    // this.dataService.checklogin$.subscribe((trigger: any)=>{
    //   this.is_loggedin = trigger;
    // });
  }
  title = 'gowhere-backend';
  ngOnInit(): void {

  }


}
