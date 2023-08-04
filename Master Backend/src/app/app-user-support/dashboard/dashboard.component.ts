import { Component, OnInit ,ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import * as moment from "moment";
import { HttpClient } from '@angular/common/http';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent |  any;
  public chartOptions: Partial<ChartOptions> | any;
   public DonutGraph: Partial<ChartOptions> | any;
 randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 stats2: any = [
    { title: "Open", color: "#E02020", count: 23, per:20 },
    { title: "Pending", color: "#FFB000", count: 16, per: 20 },
    { title: "Esclated", color: "#1EBBBA", count: 56, per: 20  },
    { title: "Closed", color: "#FA6400", count: 76, per: 20  }
  ];
  constructor(private http: HttpClient) {
    var days = this.getDaysArrayByMonth();

    this.chartOptions = {
      series: [
        {
          name: "Open Tickets",
          data: Array.from({length: days.length}, () => this.randomBetween(30, 60))
        },
        {
          name: "Pending Tickets",
          data: Array.from({length: days.length}, () => this.randomBetween(30, 60))
        },
        {
          name: "Pending Tickets",
          data: Array.from({length: days.length}, () => this.randomBetween(30, 60))
        },
        {
          name: "Declined",
          data: Array.from({length: days.length}, () => this.randomBetween(30, 60))
        }
      ],
      chart: {
        type: "bar",
        height: 380,
        toolbar: {
      show: false
    }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"]
      },
      xaxis: {
        categories: days,
      },
      legend: {
      show: false,
    },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
         colors: ['#E02020', '#FFB000', '#1EBBBA', '#FA6400'],
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
    };


    this.DonutGraph = {
        series: [120,180,60,240],
        chart: { type: "donut", },
        stroke: { width: 0 },
        labels: ["Open", "Pending", "Esclated", "Closed"],
        legend: { show: false },
        fill: {
          type: "solid",
           colors: ['#E02020', '#FFB000', '#1EBBBA', '#FA6400'],
        },
        tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return '<div class="tooltip-box">' +  '<div class="total-booking"><span>' + series[seriesIndex] + '</span>' +
                    '<span>Tickets</span></div>' + '</div>';
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "top",
            },
          },
        },
      ],
      totalcount : 600
    };

  }

  


  getDaysArrayByMonth() {
      var daysInMonth = moment().daysInMonth();
      var arrDays : any = [];
      while(daysInMonth) {
        var current =  moment().date(daysInMonth);
        arrDays.push(current.format('DD'));
        daysInMonth--;
      }
      return arrDays.sort();
    }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/users?limit=100').subscribe((users:any) => {
      this.MobileUsersList = users.users.map((user,index)=>{
          user.device = this.getRandomDevice();
          return user;
        })
      this.generateDeviceAndGenderwiseCount();
    }, error => console.error(error));
  }

getRandomDevice() {
     const months = ["android", "ios"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }
   MobileUsersList : any = [];
  statsData : any = {
      ios:{downloads:0,male:0,female:0},
      android:{downloads:0,male:0,female:0},
      gender:{
            male:{ios:0,android:0},
            female:{ios:0,android:0},
          }
    };
 generateDeviceAndGenderwiseCount(){
    var usersObject:any = {};
    this.MobileUsersList.filter((user,index)=>{
        if(!usersObject[user.address.city]){
          usersObject[user.address.city] = {android:0,ios:0};
        }
       if(user.device == 'android'){
        usersObject[user.address.city].android++;
       }
       if(user.device == 'ios'){
        usersObject[user.address.city].ios++;
       }
    });
     this.statsData.cityWiseData = Object.keys(usersObject).map((key) => [{city:key,users: usersObject[key]}]);
    this.showChart = true;
  }

  percentage(partialValue:number, totalValue:number) {
   return ((100 * partialValue) / totalValue).toFixed(2);
  } 

  showChart : boolean = false;
  

}
