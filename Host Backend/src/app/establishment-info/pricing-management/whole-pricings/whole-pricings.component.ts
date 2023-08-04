import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit, ElementRef } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FullCalendarComponent } from "@fullcalendar/angular";
import * as moment from "moment";
declare var window: any;

@Component({
  selector: 'app-whole-pricings',
  templateUrl: './whole-pricings.component.html',
  styleUrls: ['./whole-pricings.component.scss']
})


export class WholePricingsComponent implements OnInit {
  Events: any[] = [];
    calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    weekends: true,
    headerToolbar: {
      left: '',
      center: '',
      right: ''
    },
    selectable: true,
    showNonCurrentDates:false,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.eventClicked.bind(this),
    datesSet: this.handleMonthChange.bind(this),
  };

  RoomList: any = [];
  calendar: any;
  currentMonthIndex: number = 0;
  currentMonthNumber: number = 0;
  currentYearIndex: number = 0;
  yearList: any = [];
  estType : string = 'room';
  formModal: any;

  @ViewChild("calendar") calendarComponent: FullCalendarComponent | any;

   monthsList: any = [
    { no: "01", monthName: "January", monthShortName: "Jan" },
    { no: "02", monthName: "February", monthShortName: "Feb" },
    { no: "03", monthName: "March", monthShortName: "Mar" },
    { no: "04", monthName: "April", monthShortName: "Apr" },
    { no: "05", monthName: "May", monthShortName: "May" },
    { no: "06", monthName: "June", monthShortName: "Jun" },
    { no: "07", monthName: "July", monthShortName: "Jul" },
    { no: "08", monthName: "August", monthShortName: "Aug" },
    { no: "09", monthName: "September", monthShortName: "Sep" },
    { no: "10", monthName: "October", monthShortName: "Oct" },
    { no: "11", monthName: "November", monthShortName: "Nov" },
    { no: "12", monthName: "December", monthShortName: "Dec" },
  ];

   avgRoomPrice : number = 300;
  constructor() {}
 
  ngOnInit(): void {
    this.yearList = this.generateYearsBetween(2023, 2040);
    this.currentMonthIndex = moment().month();
    this.currentMonthNumber = moment().month();
    this.formModal = new window.bootstrap.Modal(document.getElementById('add-price-modal'));
  }



  generateYearsBetween(startYear, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years: any = [];
    for (var i = startYear; i <= endDate; i++) {
      years.push({"yearName":startYear,"year":startYear});
      startYear++;
    }
    return years;
  }

  eventClicked(arg: any) {

    // console.log(arg.event.title)
  }
  handleDateClick(arg: any) {
    let startDate = moment(arg.dateStr, "YYYY-MM-DD");
    console.log(arg,"Load Rooms Data For Selected Date  " + arg.dateStr);
    this.formModal.show();
  }

  changeMonth(direction: string) {
    if (direction === 'prev') {
      if (this.currentMonthIndex > 0) {
        this.currentMonthIndex--;
      } else {
        this.currentMonthIndex = 11;
        this.changeYear('prev');
      }
    } else if (direction === 'next') {
      if (this.currentMonthIndex < this.monthsList.length - 1) {
        this.currentMonthIndex++;
      } else {
        this.currentMonthIndex = 0;
        this.changeYear('next');
      }
    }
      let calendarApi = this.calendarComponent.getApi();
      if (direction == 'next') {
         calendarApi.next();
      } else {
         calendarApi.prev();
      }
  }

  changeYear(direction: string) {
    if (direction === 'prev') {
      if (this.currentYearIndex > 0) {
        this.currentYearIndex--;
      }
    }else if (direction === 'next') {
      if (this.currentYearIndex < this.yearList.length - 1) {
        this.currentYearIndex++;
      }
    }

  }

  checkIfDisabled(type:any){
    if(type == 'month'){
        return this.currentMonthIndex == this.currentMonthNumber && this.currentYearIndex == 0;
    }else{
      return this.currentYearIndex == 0;
    }
  }

  disableNextYear(){
     return this.yearList.length-1 == this.currentYearIndex;
  }

  updateYearCalendar(direction: string) {
    if (direction === 'prev') {
      if (this.currentYearIndex > 0) {
        this.currentYearIndex--;
      }
    }else if (direction === 'next') {
      if (this.currentYearIndex < this.yearList.length - 1) {
        this.currentYearIndex++;
      }
    }

     let calendarApi = this.calendarComponent.getApi();
      if (direction == 'next') {
         calendarApi.nextYear();
      } else {
         calendarApi.prevYear();
      }
  }
getDaysArrayByMonth(startDate) {
  var daysInMonth = startDate.daysInMonth();
  var arrDays : any = [];
  while(daysInMonth) {
    var current = startDate.date(daysInMonth).format('YYYY-MM-DD');
    arrDays.push({'title': "$"+this.avgRoomPrice, 'start' : current});
    daysInMonth--;
  }

  return arrDays;
}
  handleMonthChange(payload:any) {
    let startDate = moment(payload.startStr, "YYYY-MM");
    var month = startDate.month();
    var year   = startDate.year();
    this.Events = this.getDaysArrayByMonth(startDate);
     setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick: this.handleDateClick.bind(this),
      };
    }, 100);

  }


}
