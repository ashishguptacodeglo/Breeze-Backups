import { Component, OnInit ,ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.scss']
})
export class EditListingComponent implements OnInit  {
   options: any = {
    autoApply: false,
    alwaysShowCalendars: true,
    showCancel: false,
    showClearButton: false,
    linkedCalendars: true,
    singleDatePicker: false,
    showWeekNumbers: false,
    showISOWeekNumbers: false,
    customRangeDirection: true,
    lockStartDate: false,
    closeOnAutoApply: true
  };
    selected : any =  {startDate: moment.isMoment, endDate: moment.isMoment};
    ShowCalendar = false;
  constructor() {
    // this.alwaysShowCalendars = true;
    // console.log(this.ranges)
  }
 
  @ViewChild(DaterangepickerDirective) pickerDirective :any = DaterangepickerDirective;
choosedDate(data:any) {
  console.log(data)
    if (data.startDate == null || data.endDate == null) {
      return;
    }
    {
      console.log(moment(data.startDate.$d).format('YYYY-MM-DD'));
      console.log(moment(data.endDate.$d).format('YYYY-MM-DD'));
    }
  }
  ngOnInit(): void {
  }
 openDatepicker() {
   console.log("Hi aashish")
   this.ShowCalendar = true;
    // this.pickerDirective.open();
  }
  
  

}
