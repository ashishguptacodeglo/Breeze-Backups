import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  page: any = "tasks";
  breadCrumb: any = {
    level: 2,
    page: 'Task',
    parents: [
      { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  ticketlist: any = [];
  fetched: boolean = false;
  timeArray: any = [];
  addSteps: any = 'form';

  constructor(private http: HttpClient) {
  }
  getRandomStatus() {
    const months = ["open", "closed", "pending"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
  ngOnInit(): void {
    var d = new Date(),
      h = 8.00,
      m = 0,
      meridiem = ['AM', 'PM'];
    for (var i = h; i < 24; ++i) {
      for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {
        var time = i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0];
        this.timeArray.push({ value: time, name: time });
      }
    }

    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.ticketlist = posts;
      this.ticketlist = this.ticketlist.map((ticket, index) => {
        ticket.status = this.getRandomStatus();
        return ticket;
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

  SelectedDepartments = [
    { value: "1", name: "Dep1" },
    { value: "2", name: "Dep2" },
    { value: "3", name: "Dep3" },
    { value: "3", name: "Dep4" },
    { value: "4", name: "Dep5" },
  ];

  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }

  showNext() {
    this.addSteps = 'next';
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
  submitTheForm() {
    console.log("Submit The Form")
  }

  addtaskForm = new FormGroup({
    taskName: new FormArray([], [Validators.required])
  });

  filter = [
    { value: 'all', name: "All" },
    { value: 'option-1', name: "Option 1" },
    { value: 'option-2', name: "Option 2" },
    { value: 'option-3', name: "Option 3" },
  ];


  taskTypeArray: string[] = ['Laundry services','Cleaning and maintaining guest rooms','Changing towels','Remove trash'];

  bedTypeOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.addtaskForm.get('taskName') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      const index = checkedArray.controls.findIndex(x => x.value === checkedValue);
      if (index >= 0) {
        checkedArray.removeAt(index);
      }
    }

    //console.log(checkedArray.value);
  }

}
