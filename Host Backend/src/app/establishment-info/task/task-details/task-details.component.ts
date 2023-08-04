import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
   breadCrumb: any  = { 
  level: 3,
  page: 'TaskId',
  parents: [
    { name: 'Task', link: '/establishment-info/task' }
    ],
  }
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){
    this.status = event.value;
  }
  info = [
    {"label":"Assigned to","value":"Lettie Watkins"},
    {"label":"Department","value":"Cleaning"},
    {"label":"Room number","value":"12"},
    {"label":"Assigned on","value":"10/02/2023"},
    {"label":"Assigned at","value":"12:20"},
    {"label":"Contact Mail","value":"Lettiewatkins@email.com"},
  ]
  status = 'open';
   statusList = [
    {value: 'open', name: 'open'},
    {value: 'closed', name: 'closed'},
    {value: 'pending', name: 'pending'},
];
   TaskList = [
      "Laundry services",
      "Cleaning and maintaining guest rooms",
      "Changing towels",
      "Remove trash",
  ];
}
