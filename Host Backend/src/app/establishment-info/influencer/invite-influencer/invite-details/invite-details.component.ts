import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-details',
  templateUrl: './invite-details.component.html',
  styleUrls: ['./invite-details.component.scss']
})
export class InviteDetailsComponent implements OnInit {

  // Home / Influencer/ Invites / details
  breadCrumb: any = {
    level: 3,
    page: 'Details',
    parents: [
      { name: 'Influencer', link: '/establishment-info/influencer' },
      { name: 'Invites', link: '/establishment-info/influencer', queryParams: { tab: 'invites' } },
    ],
  }
  constructor() { }

  getRandomStatus() {
    const status = ["accepted", "pending", "declined"];
    const random = Math.floor(Math.random() * status.length);
    return status[random];
  }
  ngOnInit(): void {
  }

}
