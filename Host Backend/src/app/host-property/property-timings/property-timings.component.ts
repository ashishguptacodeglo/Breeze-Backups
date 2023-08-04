import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-property-timings',
  templateUrl: './property-timings.component.html',
  styleUrls: ['./property-timings.component.scss']
})
export class PropertyTimingsComponent implements OnInit {

  timeArray: any = [];
  submitForm = false;
  daysInWeek: any = [
    { "dayName": 'Sunday', status: 'closed',"closetime":"", "opentime":""},
    { "dayName": 'Monday', status: 'closed',"closetime":"", "opentime":""},
    { "dayName": 'Tuesday', status: 'closed',"closetime":"", "opentime":""},
    { "dayName": 'Wednesday', status: 'closed',"closetime":"","opentime":"" },
    { "dayName": 'Thursday', status: 'closed',"closetime":"","opentime":"" },
    { "dayName": 'Friday', status: 'closed',"closetime":"", "opentime":""},
    { "dayName": 'Saturday', status: 'closed',"closetime":"","opentime":"" },
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
    this.router.navigate(['/host-property/property-photos']);
  }

  goBack() {
    this.router.navigate(['/host-property/room-service-availability']);
  }
}
