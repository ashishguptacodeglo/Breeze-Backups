import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from "moment";


@Component({
  selector: 'app-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss']
})
export class ApprovalDetailsComponent implements OnInit {

  constructor() { }
  ApprovalActivityHistory: any = [
    {
      date: "2023-08-15", activites: [
        { time: "10.25 AM", "activity": "Online Application", approved_by: "", status: this.getRandomStatus() },
        { time: "15.25 AM", "activity": "Application Review", approved_by: "", status: this.getRandomStatus() }
      ]
    },
    { date: "2023-08-18", activites: [{ time: "10.25 AM", "activity": "Online Application", approved_by: "", status: this.getRandomStatus() }, { time: "15.25 AM", "activity": "Application Review", approved_by: "", status: this.getRandomStatus() }] },
    { date: "2023-08-20", activites: [{ time: "10.25 AM", "activity": "Online Application", approved_by: "", status: this.getRandomStatus() }, { time: "15.25 AM", "activity": "Application Review", approved_by: "", status: this.getRandomStatus() }] },
    {
      date: "2023-08-25", activites: [{ time: "10.25 AM", "activity": "Document verification", approved_by: "", status: this.getRandomStatus() },
      ]
    },
  ];

  StatusArary = ["declined", "approved", "inprogress"]
  ngOnInit(): void {

    console.log(this.ApprovalActivityHistory)
  }

  steps = [
    { title: "Online application", isactive: true },
    { title: "Application Review", isactive: false },
    { title: "Documentation Review", isactive: false },
    { title: "Documents Verified Confirmation mail ", isactive: false },
    { title: "Establishment goes live", isactive: false },
  ];

  estfilters = [
    { value: "approved", name: "Approved" },
    { value: "rejected", name: "Rejected" },
  ];

  getRandomStatus() {
    const months = ["rejected", "approved"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  getMonthName(date: any) {
    return moment(date).format("MMM");
  }
  OpenActionModal(i: any, j: any, action: boolean) {
    this.ApprovalActivityHistory[i].activites[j].ismodalopen = action;
  }
  statusChangeNgSelect(event: any, i: any, j: any) {
    this.ApprovalActivityHistory[i].activites[j].status = event.value;
    this.ApprovalActivityHistory[i].activites[j].ismodalopen = event.value == 'rejected';
  }
  checkIfContains(activity: any) {
    return activity.toLowerCase().includes("document")
  }
  @Output() BackEvent = new EventEmitter<string>();
  OpenActivities() {
    this.BackEvent.emit("documents");
  }

}
