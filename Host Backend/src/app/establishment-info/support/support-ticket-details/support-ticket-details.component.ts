import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-ticket-details',
  templateUrl: './support-ticket-details.component.html',
  styleUrls: ['./support-ticket-details.component.scss']
})
export class SupportTicketDetailsComponent implements OnInit {
  breadCrumb: any = {
    level: 3,
    page: 'TICKETID',
    parents: [
      { name: 'Support', link: '/establishment-info/support' }
    ],
  }
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event: any) {
    this.status = event.value;
  }

  status = 'open';
  statusList = [
    { value: 'open', name: 'open' },
    { value: 'closed', name: 'closed' },
    { value: 'pending', name: 'pending' },
  ];
  attachments = [
    { name: "Issue summary", type: "doc" },
    { name: "Payment_slip", type: "pdf" }
  ];

}
