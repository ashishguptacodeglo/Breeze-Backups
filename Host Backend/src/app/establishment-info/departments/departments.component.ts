import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  workersList: any = [];
  fetched: boolean = false;

  breadCrumb: any = {
    level: 2,
    page: 'Departments',
    parents: [
      { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
  constructor(private http: HttpClient) {
  }

  getRandomStatus() {
    const months = ["Cleaner", "Cook", "Admin", "Laundry person"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.workersList = posts;
      this.workersList = this.workersList.map((user, index) => {
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
  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  submitTheForm() {
    console.log("Hello")
  }

  showDetails() {
    console.log("Hi")
  }

  tasks: string[] = [];
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
