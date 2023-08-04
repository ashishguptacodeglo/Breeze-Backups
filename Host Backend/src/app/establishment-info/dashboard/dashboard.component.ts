import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexStroke,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  fill: ApexFill;
  stroke: ApexStroke,
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  tooltip: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page: any = "tasks";
  breadCrumb: any = {
    level: 2,
    page: 'Dashboard',
    parents: [
      { name: 'Establishment Management ', link: '/establishment-info/establishment-management' }
    ],
  }
  @ViewChild(DataTableDirective) dtElement: DataTableDirective | any;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  bookings: any = [];
  fetched: boolean = false;
  timeArray: any = [];
  addSteps: any = 'form';


  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public BarChartOptions: Partial<ChartOptions> | any;



  selected: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'This Week': [moment().subtract(6, 'days'), moment().subtract(1, 'days')],
    'Last Week': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Past Two Week': [moment().subtract(13, 'days'), moment().subtract(1, 'days')],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'This Year': [moment().startOf('year'), moment().endOf('year')],
    'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
  }

  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some(d => d.isSame(m, 'day'))
  }





  constructor(private http: HttpClient) {
    this.chartOptions = {
      series: [80, 70],
      chart: {
        height: 200,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "16px"
            },
            value: {
              fontSize: "14px"
            }
            // total: {
            //   show: true,
            //   label: "Total",
            //   formatter: function(w) {
            //     return "249";
            //   }
            // }
          }
        }
      },
      fill: {
        colors: ["#0E7ECA", "#019F98"],
      },

      labels: ["Male", "Female"],
    };


    this.BarChartOptions = {
      series: [
        {
          name: "Booking",
          data: [10, 20, 10, 30, 50, 75, 60, 40, 50, 30, 75, 50, 40, 30, 70]
        }
      ],

      chart: {
        height: 375,
        type: "bar"
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          console.log(series[seriesIndex], series[seriesIndex][dataPointIndex], w)
          return '<div class="tooltip-box">' +
            '<span class="date">June 13, 2022</span>' +
            '<div class="total-booking"><span>' + series[seriesIndex][dataPointIndex] + '</span>' +
            '<span>Bookings</span></div>' +
            '</div>'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "bottom", // top, center, bottom
          }
        }
      },

      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        position: "bottom",
        labels: {
          offsetY: 0
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },

      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },

      fill: {
        colors: ["rgba(30,187,186, 0.4)"],
      },

      dataLabels: {
        enabled: false
      },

      grid: {
        yaxis: {
          lines: {
            show: false
          }
        }
      }

    };

    this.alwaysShowCalendars = true;
  }

  getRandomStatus() {
    const months = ["booked", "cancelled", "pending"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
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
      this.bookings = posts;
      this.bookings = this.bookings.map((booking, index) => {
        booking.status = this.getRandomStatus();
        return booking;
      })

      this.fetched = true;
      this.dtOptions = {
        pagingType: "simple_numbers",
        language: { emptyTable: "No data Available" },
        pageLength: 5,
        processing: true,
        ordering: false,

      };
    }, error => console.error(error));

  }

  statsArray = [
    { label: "Total No of bookings", stat: "40,540", icon: "/assets/img/host-backend/calendar.svg", iconbgcolor: "red" },
    { label: "Total Earning", stat: "$567", icon: "/assets/img/host-backend/price.svg", iconbgcolor: "red" },
    { label: "Total property views", stat: "68", icon: "/assets/img/host-backend/eye.svg", iconbgcolor: "red" },
    { label: "Property engagement ", stat: "$567", icon: "/assets/img/host-backend/home.svg", iconbgcolor: "red" },
    { label: "Total property impressions", stat: "47", icon: "/assets/img/host-backend/thumb.svg", iconbgcolor: "red" },
    { label: "Referral traffic", stat: "47", icon: "/assets/img/host-backend/share.svg", iconbgcolor: "red" },
    { label: "Conversion rate", stat: "47", icon: "/assets/img/host-backend/conversion.svg", iconbgcolor: "red" },
    { label: "Total followers", stat: "47", icon: "/assets/img/host-backend/followers.svg", iconbgcolor: "red" },
  ];


  choosedDate(data: any) {

    if (data.startDate == null || data.endDate == null) { return; } {
      var startDate = moment(data.startDate.$d).format("YYYY-MM-DD");
      var endDate = moment(data.endDate.$d).format("YYYY-MM-DD");
      console.log(startDate, endDate);
    }
  }


}
