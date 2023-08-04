
import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit, ElementRef } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-amenities-management',
  templateUrl: './amenities-management.component.html',
  styleUrls: ['./amenities-management.component.scss']
})
export class AmenitiesManagementComponent implements OnInit {


  page: any = "tasks";
  breadCrumb: any = {
    level: 2,
    page: 'Amenities Management'
  }
  ticketlist: any = [];
  listDataAll: any = [];
  fetched: boolean = false;

  baseUrl = "";
  addEditForm: FormGroup | any;
  amenities: any = [];
  iconImages: any = [];
  iconImagesName: any = [];
  @ViewChild('closeModal') private closeModal: ElementRef | any;
  modalTitle: string = "";
  isEdit: boolean = false;


  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  getRandomStatus() {
    const months = ["open", "closed", "pending", "declined"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }



  getRandomImages() {
    const months = [
      "assets/img/master-backend/amenities/class-1.png",
      "assets/img/master-backend/amenities/class-newclass-1.png",
      "assets/img/master-backend/amenities/class-newclass-2.png",
      "assets/img/master-backend/amenities/class-newclass-3.png",
      "assets/img/master-backend/amenities/class-newclass-4.png",
      "assets/img/master-backend/amenities/class-newclass-5.png",
      "assets/img/master-backend/amenities/class-newclass-6.png"
    ];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }



  totalPages: number = 1;
  currentPage: number = 1;
  perPageCount: number = 10;
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.ticketlist = posts;
      this.ticketlist = this.ticketlist.map((ticket, index) => {
        ticket.image = this.getRandomImages()
        return ticket;
      })
      this.listDataAll = this.ticketlist;
      this.fetched = true;
      this.ticketlist = this.ticketlist.slice(0, 10);
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.listDataAll.length / 10);
    }, error => console.error(error));
    this.addFormInitialize();
  }

  numSequence(n): Array<number> {
    n = n || 0;
    let y: number = +n;
    return Array(y);
  }
  changePage(pageNo) {
    this.currentPage = pageNo;
    let start = (this.currentPage - 1) * this.perPageCount;
    let end = this.currentPage * this.perPageCount;
    this.ticketlist = this.listDataAll.slice(start, end);
  }


  submitTheForm() {
    console.log("Submit The Form")
  }

  get getItemList() {
    return <FormArray>this.addEditForm.get('list');
  }

  onAddItem() {
    this.addEditForm.controls.list.push(this.addItemGroup());
  }
  addItemGroup() {
    return this.fb.group({
      amenityName: new FormControl('', Validators.required),
    });
  }
  removeItem(index) {
    this.addEditForm.controls['list'].removeAt(index);
    if (index + 1 <= this.iconImagesName.length) {
      this.iconImagesName.splice(index, 1);
      this.iconImages.splice(index, 1);
    }
  }

  addFormInitialize() {
    this.modalTitle = 'Add Amenities';
    this.isEdit = false;
    this.iconImagesName = [''];
    this.iconImages = [];
    this.addEditForm = new FormGroup({
      list: new FormArray([this.addItemGroup()]),
    });
  }
  editFormInitialize(data: any) {
    console.log(data)
    // this.modalTitle = 'Edit Amenity';
    // this.isEdit = true;
    // this.iconImagesName = [''];
    // this.iconImages = [];
    // this.addEditForm = new FormGroup({
    //   amenityid: new FormControl(data.listId, Validators.required),
    //   amenityName: new FormControl(data.listName, Validators.required),
    // });
    // console.log(this.iconImages)
  }
  iconChange(event, index) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.iconImagesName[index] = file.name;
      this.iconImages[index] = file;
    }
  }
  deleteItem(id: any) {
    let params: any = {
      serviceName: 'amenities',
      serviceId: id
    }
    // this.CategoryManagementService.deleteCharteristic(params).subscribe((res: any) => {
    //   this.getAmenityList();
    //   this.toastrService.success(res.customMessage ? res.customMessage : SuccessAddToasterMsg); 
    // });
  }

  saveForm() {
    // if (this.isEdit) {
    //   this.editForm();
    // } else {
    //   this.addForm();
    // }
  }

}
