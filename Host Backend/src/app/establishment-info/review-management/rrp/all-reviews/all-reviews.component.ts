import { Component,ElementRef, OnDestroy,OnInit,ViewChild , Input,TemplateRef , AfterViewInit } from "@angular/core";
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
declare var window: any;


@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit {
  @Input() cateIdName;
  pagereview: any = 'review';
  dashboardData = [];
  establishmentList: any;
  allReviews = [];
  leastCategory = '';
  resolvedReviews = [];
  resolvedReviewsCounts = 0;
  revokedReviewsCounts = 0;
  totalReviews : any =  0;
  selectedRestaurant: any;
  dealList = [];
  selectedUserName: any;
  // public selection: SelectionModel<any>;
  timeArray: any = [];
  addSteps: any = 'form';

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched : boolean = false;

  constructor(private http: HttpClient) {
  }
  randomIntFromInterval(min:any, max:any) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
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
        this.posts = posts;
        this.posts = this.posts.map((review,index)=>{
          review.usersFeedBack = review.body;
          review.username =  review.title;
          review.averageRating = this.randomIntFromInterval(1,5);
          review.rating = this.randomIntFromInterval(1,5);
          review.ratings = [
            { rating:this.randomIntFromInterval(1,5)},
            { rating:this.randomIntFromInterval(1,5)},
            { rating:this.randomIntFromInterval(1,5)},
            { rating:this.randomIntFromInterval(1,5)},
            { rating:this.randomIntFromInterval(1,5)},
            { rating:this.randomIntFromInterval(1,5)},
          ]
          return review;
        })
        this.fetched = true;
        this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
      };
    }, error => console.error(error));

        this.formModal = new window.bootstrap.Modal(document.getElementById('categoriesModal'));
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

  selectedRecords() {
    // this.selectedUserName = this.selection.selected.map((a)=>a.username).join(',');
    // let selectedUserId = this.selection.selected.map((a)=>a.userId);
    // // this.resolveForm.get('userNames').setValue(this.selectedUserName);
    // this.resolveForm.get('userId').setValue(selectedUserId);
  }
   reviewResolveIndividual(review:any){
    this.selectedUserName = review.username;
    console.log(this.selectedUserName)
    // this.resolveForm.get('userId').setValue([review.userId]);
  }


  numSequence(n): Array<number> {
    n = n || 0;
    let y: number = +n;
    return Array(y);
  }
  numSequenceDisable(n): Array<number> {
    n = n || 0;
    let y: number = +n;
    y=5-y;
    return Array(y);
  }
 makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
     catList: any = [
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},
        {catname:this.makeid(5),rating:this.randomIntFromInterval(1,5),total:125},

    ];
       formModal: any;
  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    this.formModal.hide();
  }
  


  

  filter = [
    { value: 'all', name: "All" },
    { value: 'option-1', name: "Option 1" },
    { value: 'option-2', name: "Option 2" },
    { value: 'option-3', name: "Option 3" },
  ];


}
