import { Component,ElementRef, OnDestroy,OnInit,ViewChild , Input,TemplateRef , AfterViewInit } from "@angular/core";
import { FormBuilder, FormControl,FormArray, FormGroup, Validators } from '@angular/forms';
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
// import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-establisment-reviews',
  templateUrl: './establisment-reviews.component.html',
  styleUrls: ['./establisment-reviews.component.scss']
})
export class EstablismentReviewsComponent implements OnInit {

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

  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  posts: any = [];
  fetched : boolean = false;
  manageCategory: any;

  constructor(private http: HttpClient) {
  }
  randomIntFromInterval(min:any, max:any) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  ngOnInit(): void {
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

  }

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
    reviewSort = [
      {id: 1, name: 'Option1'},
      {id: 2, name: 'Option2'},
      {id: 4, name: 'Option3'},
  ];
  taskTypeArray: string[] = ['Cleanliness','Service','Location','Facilities','Value','Ambience'];
  bedTypeOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.manageCategory.get('taskName') as FormArray;

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
