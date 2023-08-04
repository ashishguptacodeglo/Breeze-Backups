import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  workersList: any = [];
  fetched: boolean = false;
  breadCrumb: any = {
    level: 3,
    page: 'HouseKeeping',
    parents: [
      { name: 'Departments ', link: '/establishment-info/departments' },
    ],
  }

  constructor(private http: HttpClient) {
  }

  getRandomStatus() {
    const months = ["Cleaner", "Cook", "Admin", "Laundry person"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  getImage() {
    const months = [
      "assets/img/host-backend/profile.png",
      "https://user.ptetutorials.com/images/user-profile.png",
      "assets/img/dashboard/header-account.svg"
    ];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.workersList = posts;
      this.workersList = this.workersList.map((user, index) => {
        user.status = this.getRandomStatus();
        user.image = this.getImage();
        return user;
      })

      this.fetched = true;
      this.dtOptions = {
        pagingType: "simple_numbers",
        language: { emptyTable: "No data Available" },
        pageLength: 10,
        processing: true,
        ordering: false,

      };
    }, error => console.error(error));

  }
  

  submitTheForm() {
    console.log("Hello")
  }


  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
  newTaskName: string = '';
  showNoTaskMessage: boolean = true;

  addTask() {
    if (this.newTaskName.trim() !== '') {
      this.tasks.push(this.newTaskName);
      this.newTaskName = '';
      this.showNoTaskMessage = false;
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.tasks.length === 0) {
      this.showNoTaskMessage = true;
    }
  }

}
