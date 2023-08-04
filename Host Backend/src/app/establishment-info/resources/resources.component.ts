import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

   @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  workersList: any = [];
  fetched: boolean = false;

breadCrumb: any  = { 
  level: 2,
  page: 'Resources',
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

  files: File[] = [];

onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next(true);
  }
   SelectedDepartments = [
      { value: "1", name: "Dep1" },
      { value: "2", name: "Dep2" },
      { value: "3", name: "Dep3" },
      { value: "3", name: "Dep4" },
      { value: "4", name: "Dep5" },
    ];

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  filter = [
    { value: 'all', name: "All" },
    { value: 'option-1', name: "Option 1" },
    { value: 'option-2', name: "Option 2" },
    { value: 'option-3', name: "Option 3" },
  ];

  setBack(event:any){
    this.files = [];
  }
  openFilePicker(){
      this.files = [];
      this.userImage = "";
  }

  userImage : string = "";
  LoadData(){
    this.userImage = "assets/img/host-backend/profile.png";
    this.headerMessage = "Edit Team member details";
  }

  headerMessage = "Add Team member";
  modalClose(){
     this.files = [];
      this.userImage = "";
  }

  RemoveMember(){
    console.log("Remove User");
  }

}
