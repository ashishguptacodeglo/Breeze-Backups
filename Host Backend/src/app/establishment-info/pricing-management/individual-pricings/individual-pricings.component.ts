import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit, ElementRef } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FullCalendarComponent } from "@fullcalendar/angular";
import * as moment from "moment";


@Component({
  selector: 'app-individual-pricings',
  templateUrl: './individual-pricings.component.html',
  styleUrls: ['./individual-pricings.component.scss']
})
export class IndividualPricingsComponent implements OnInit {

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
    datesSet: this.handleMonthChange.bind(this),
  };

  RoomList: any = [];
  calendar: any;
  currentMonthIndex: number = 0;
  currentMonthNumber: number = 0;
  currentYearIndex: number = 0;
  yearList: any = [];
  estType : string = 'hotel';

  @ViewChild("calendar") calendarComponent: FullCalendarComponent | any;

  SelectedDate : any = {};

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe((posts) => {
      this.RoomList = posts;
      this.RoomList = this.RoomList.map((room, index) => {
        room.price = "300";
        room.name = "Table " + (index + 1);
        room.desc = "Cras quis nulla commodo, aliquam lectus sed,.";
        return room;
      });
    },(error) => console.error(error)
    );
    this.yearList = this.generateYearsBetween(2023, 2040);
    this.currentMonthIndex = moment().month();
    this.currentMonthNumber = moment().month();
    this.SelectedDate = { 
      monthName:moment().format('MMMM'),
      date:moment().format('DD'),
      dayName:moment().format('dddd'),
    }

    console.log(this.SelectedDate);
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

  handleDateClick(arg: any) {
    let startDate = moment(arg.dateStr, "YYYY-MM-DD");
    this.SelectedDate = {
      monthName:startDate.format('MMMM'),
      date:startDate.format('DD'),
      dayName:startDate.format('dddd'),
    }
    // console.log("Load Rooms Data For Selected Date  " + arg.dateStr);
  }

  monthsList: any = [
    { no: "0", monthName: "January", monthShortName: "Jan" },
    { no: "1", monthName: "February", monthShortName: "Feb" },
    { no: "2", monthName: "March", monthShortName: "Mar" },
    { no: "3", monthName: "April", monthShortName: "Apr" },
    { no: "4", monthName: "May", monthShortName: "May" },
    { no: "5", monthName: "June", monthShortName: "Jun" },
    { no: "6", monthName: "July", monthShortName: "Jul" },
    { no: "7", monthName: "August", monthShortName: "Aug" },
    { no: "8", monthName: "September", monthShortName: "Sep" },
    { no: "9", monthName: "October", monthShortName: "Oct" },
    { no: "10", monthName: "November", monthShortName: "Nov" },
    { no: "11", monthName: "December", monthShortName: "Dec" },
  ];

 
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

  handleMonthChange(payload:any) {
    let startDate = moment(payload.startStr, "YYYY-MM");
    var month = startDate.month();
    var year   = startDate.year();
    // console.log(month,year);
  }


}
