import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.scss']
})
export class TimingComponent implements OnInit {
 
  timeArray: any = [];
  submitForm = false;
  daysInWeek: any = [
    { 
      "dayName": 'Sunday', 
      "status": 'closed',
      "closetime":"", 
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ]
    },
    { 
      "dayName": 'Monday', 
      "status": 'closed',
      "closetime":"", 
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ]
    },
    { 
      "dayName": 'Tuesday', 
      "status": 'closed',
      "closetime":"", 
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ]
    },
    { 
      "dayName": 'Wednesday', 
      "status": 'closed',
      "closetime":"",
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ] 
    },
    { 
      "dayName": 'Thursday', 
      "status": 'closed',
      "closetime":"",
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
        ]
    },
    { 
      "dayName": 'Friday', 
      "status": 'closed',
      "closetime":"", 
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ]
    },
    { 
      "dayName": 'Saturday', 
      "status": 'closed',
      "closetime":"",
      "opentime":"",
      "time_slots":[
        {"opentime":"","closetime":""}
      ] 
    },
  ];
  constructor(private router: Router) {

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
    console.log(this.daysInWeek)
  }
  fieldsChange(values: any, index: any) {
    this.daysInWeek[index].status = values.currentTarget.checked ? "open" : "closed";
    this.SetSubmitFlag();
  }
 checkedValue(values: any){
       var oldValues = this.daysInWeek;
       if(values.currentTarget.checked){
        this.daysInWeek.map((index:any,item:any)=>{
          index.status = "open";
        })
       }else{
           this.daysInWeek.map((index:any,item:any)=>{
            index.status = "closed";
          })
       }

}
 getSelectedValue(value: any,time:any,index:any) {
  if(time == 'open'){
    this.daysInWeek[index].opentime = value.value;
  }
  if(time == 'close'){
    this.daysInWeek[index].closetime = value.value;
  }
  this.SetSubmitFlag();
}
 SetSubmitFlag(){
  var submit = true;
   this.daysInWeek.map((index:any,item:any)=>{
      if(index.status == "open" && (index.opentime == '' || index.closetime == '')){
         submit = false;
      }
    });
   if(submit){
    this.submitForm = true;
   }
}
  onSubmit() {
    this.router.navigate(['/host-restaurant/restaurant-description'])
  }
  goBack(){
      this.router.navigate(['/host-restaurant/restaurant-basic-information'])
  }
}
