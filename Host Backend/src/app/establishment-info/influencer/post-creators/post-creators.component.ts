import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-post-creators',
  templateUrl: './post-creators.component.html',
  styleUrls: ['./post-creators.component.scss']
})
export class PostCreatorsComponent implements OnInit {

  creatorList: any = [];
  fetched: boolean = false;
  message: string = '';
  maxWords: number = 250;
  remainingWords: number = this.maxWords;
  initialRemainingWords: number = this.maxWords;

  constructor(private http: HttpClient) {
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

  posImages() {
    const postImages = [
      "assets/img/dashboard/restaurant-dish1.svg",
      "assets/img/dashboard/restaurant-dish2.svg",
      "assets/img/dashboard/restaurant-menu1.svg",
      "assets/img/dashboard/restaurant-menu2.svg",
      "assets/img/dashboard/restaurant-dish3.svg"
    ]
    const random = Math.floor(Math.random() * postImages.length);
    return postImages[random];
  }
  timeArray: any = [];

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
      this.creatorList = posts;
      this.creatorList = this.creatorList.map((creator, index) => {
        creator.image = this.getImage();
        creator.postsImages = [
          this.posImages(),
          this.posImages(),
          this.posImages()

        ];
        return creator;
      })

      this.fetched = true;
    }, error => console.error(error));


    // Load Word Count

    this.initialRemainingWords = this.maxWords;
    this.updateWordCount();

  }

  filter = [
    { value: "1", name: "Dep1" },
    { value: "2", name: "Dep2" },
    { value: "3", name: "Dep3" },
    { value: "3", name: "Dep4" },
    { value: "4", name: "Dep5" },
  ];
  SelectedDepartments = [
    { value: "1", name: "Dep1" },
    { value: "2", name: "Dep2" },
    { value: "3", name: "Dep3" },
    { value: "3", name: "Dep4" },
    { value: "4", name: "Dep5" },
  ];
  addtaskForm = new FormGroup({
    taskName: new FormArray([], [Validators.required])
  });

  roomList = [
    { value: "1", name: "Room 1" },
    { value: "2", name: "Room 2" },
    { value: "3", name: "Room 3" },
    { value: "4", name: "Room 4" },
    { value: "5", name: "Room 5" },
  ];

  tableList = [
    { value: "Table 1", name: "Table 1" },
    { value: "Table 2", name: "Table 2" },
    { value: "Table 3", name: "Table 3" },
    { value: "Table 4", name: "Table 4" },
    { value: "Table 5", name: "Table 5" },
  ];

  offerList = [
    { value: "1", name: "Discount" },
    { value: "2", name: "Paid Promotion" },
    { value: "3", name: "Free stay" },
  ];

  taskTypeArray: string[] = ['Laundry services', 'Cleaning and maintaining guest rooms', 'Changing towels', 'Remove trash'];
  bedTypeOnChange(e: any) {
    // const checkedValue = e.target.value;
    // const checked = e.target.checked;
    // const checkedArray = this.addtaskForm.get('taskName') as FormArray;

    // if (checked) {
    //   checkedArray.push(new FormControl(checkedValue));
    // } else {
    //   const index = checkedArray.controls.findIndex(x => x.value === checkedValue);
    //   if (index >= 0) {
    //     checkedArray.removeAt(index);
    //   }
    // }

    //console.log(checkedArray.value);
  }

  offerName: string = "";
  offerValue: string = "";
  OfferTypeChange(event: any) {
    this.offerValue = event.value;
  }
  ResetModal() {
    this.offerName = '';
    this.offerValue = '';
  }

  MoveNext() {
    this.offerName = this.offerValue
  }
  SubmitTheForm() {
    console.log("Submit Invite Form")
  }

  isLastStepOfPaid = false;
  ShowLastStep() {
    this.isLastStepOfPaid = true;
  }

  estType = 'restaurant';

  countWords() {
    this.updateWordCount();
  }

  updateWordCount() {
    const words = this.message.trim().split(/\s+/);
    const wordCount = words.length;

    this.remainingWords = Math.max(this.maxWords - wordCount, 0);
    if (this.remainingWords === 0) {
      this.message = words.slice(0, this.maxWords).join(' ');
    }
  }
}
