import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  page:string = 'list'
  constructor() { }

  ngOnInit(): void {
  }

  ShowTab(page:any){
    if(this.page !== 'est-details'){
      this.page = page;
    }else{
      console.log(this.page,"Hide the Params")
    }
  }

}
