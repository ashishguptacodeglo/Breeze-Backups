import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencer-messages',
  templateUrl: './influencer-messages.component.html',
  styleUrls: ['./influencer-messages.component.scss']
})
export class InfluencerMessagesComponent implements OnInit {

  expanded: string = 'closed';
  
  constructor() { }

  ngOnInit(): void {
  }


  usersList: any = [
    {
      "image": "https://ptetutorials.com/images/user-profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": true,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    },
    {
      "image": "https://ptetutorials.com/images/user-profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    },
    {
      "image": "https://ptetutorials.com/images/user-profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    }, {
      "image": "https://ptetutorials.com/images/user-profile.png",
      "userName": "Sunil Rajput",
      "time": "Dec 25",
      "active": false,
      "isnew": false,
      "latestMessage": "Test, which is a new approach to have all solutions astrology under one roof."
    }
  ];

  OpenMessageBox(index: any) {
    this.expanded = 'open';
    this.usersList = this.usersList.map((user, li) => {
      user.active = index == li;
      return user;
    })
  }

}
