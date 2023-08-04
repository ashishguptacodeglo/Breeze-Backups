import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss']
})
export class AllMessagesComponent implements OnInit {

  expanded: string = 'closed';
  constructor() { }

  ngOnInit(): void {
  }


  usersList: any = [
    {
      "image": "assets/img/host-backend/profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": true,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    },
    {
      "image": "assets/img/host-backend/profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    },
    {
      "image": "assets/img/host-backend/profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    }, {
      "image": "assets/img/host-backend/profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    }, {
      "image": "assets/img/host-backend/profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    }
  ];

  OpenMessageBox(index: any) {
    // console.log(index)
    this.expanded = 'open';
    this.usersList = this.usersList.map((user, li) => {
      user.active = index == li;
      return user;
    })
    // this.usersList[index].active = true;
  }


}
