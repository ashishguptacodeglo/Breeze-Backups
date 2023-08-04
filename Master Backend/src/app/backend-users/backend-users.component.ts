import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import * as moment from "moment";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-backend-users',
  templateUrl: './backend-users.component.html',
  styleUrls: ['./backend-users.component.scss']
})
export class BackendUsersComponent implements OnInit {
   breadCrumb: any  = { 
      level: 2,
      page: 'Backend Users'
    }

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched: boolean = false;
 
  selected: any;
  constructor(private http: HttpClient) { }
  phoneForms!: FormGroup;
  usersList : any = [];
  ngOnInit(): void {


      this.http.get('https://dummyjson.com/users').subscribe((users:any) => {
        this.usersList = users.users.map((user,index)=>{
          return user
        });
        this.fetched = true;
      this.dtOptions = {
          pagingType: "simple_numbers",
          language: { emptyTable: "No data Available" },
          pageLength: 10,
          processing: true,
          ordering: false
        };
     })

         this.phoneForms = new FormGroup({
      firstName: new FormControl(undefined, [Validators.required]),
      lastName: new FormControl(undefined, [Validators.required]),
      emailId: new FormControl(undefined, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      designation: new FormControl(undefined, [Validators.required]),
      department: new FormControl(undefined, [Validators.required]),
      title: new FormControl(undefined, [Validators.required]),
      permision: new FormControl(undefined)
    });

  }
getuserList()
 {
  
 }

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}

  isReadonly:boolean = false;
  isDisabled:boolean = false;
  ischecked:boolean = false;
  ReadOnlyCheckbox:boolean = false;
  permisionreq:boolean = false;
  viewbtn:boolean = false;
  buserAdd()
  {

  }
  
  viewUser:any;
  edituserValid:any;
  userPermissions : any = [];
  buserView(item:any)
  {
   
  }

  viewbtnSave:boolean = false;
  buserEdit()
  {
    this.isReadonly = false;
    this.ReadOnlyCheckbox = false;
    this.isDisabled = true;
    this.viewbtnSave = true;
  }

 

  actionsList : any = [
    "All","Add","Edit","Delete"
  ];
  permissionList:any = [
      {permissionName:"Approval",actions:{all:false,add:false,edit:false,delete:false}},
      {permissionName:"Property Management",actions:{all:false,add:false,edit:false,delete:false}},
      {permissionName:"Establishment Support",actions:{all:false,add:false,edit:false,delete:false}},
      {permissionName:"Notifications",actions:{all:false,add:false,edit:false,delete:false}},
      {permissionName:"Rewards Management",actions:{all:false,add:false,edit:false,delete:false}},
      {permissionName:"Category Management",actions:{all:false,add:false,edit:false,delete:false}},
    ];
  getpermissionsList()
  {

   
  }
   SelectAll(evt:any){
     var checked = evt.target.checked;
    this.permissionList =  this.permissionList.map(function(x:any) { 
     x.actions = {all:checked,add:checked,edit:checked,delete:checked};
     return x;
    });

   }
  getLowercaseName(string:any){
    return string.toLowerCase();
  }
  updatePermissions(evt:any,action:any,index){
    var checked = evt.target.checked;
    var action =  action.toLowerCase();
     if(action == 'all'){
      this.permissionList[index].actions = {all:checked,add:checked,edit:checked,delete:checked};
     }else{
      this.permissionList[index].actions[action] = checked;
      this.permissionList[index].actions.all = false;
     }
   
  }



  selectPermision:any = [];
  checkPermission(itm:any)
  {
   
  }
  bcreateUser(event: any) {
  }
  deleteUser(id:any)
  {
    let params: any = { };
   
  }

  uid:any = '';
  onMouseOver(event:any)
  {
    // event.selected = !event.selected;
    // this.uid = event._id;
  }

}
