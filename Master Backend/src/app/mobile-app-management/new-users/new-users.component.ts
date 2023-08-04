import { Component, OnDestroy, OnInit, ViewChild, Input, TemplateRef, AfterViewInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {

  
  MobileUsersList : any = [];
  statsData : any = {
      ios:{downloads:0,male:0,female:0},
      android:{downloads:0,male:0,female:0},
      gender:{
            male:{ios:0,android:0},
            female:{ios:0,android:0},
          }
    };
   @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public MaleChart: Partial<ChartOptions> | any;
  public FemaleChart: Partial<ChartOptions> | any;

  constructor(private http: HttpClient) { }

  getRandomDevice() {
     const months = ["android", "ios"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
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

      if(user.device == 'android'){
        this.statsData.android.downloads++;
        if(user.gender == 'male'){
           this.statsData.android.male++;
        }
        if(user.gender == 'female'){
           this.statsData.android.female++;
        }
      }
      if(user.device == 'ios'){
        this.statsData.ios.downloads++;
        if(user.gender == 'male'){
           this.statsData.ios.male++;
        }
        if(user.gender == 'female'){
           this.statsData.ios.female++;
        }
      }

       if(user.gender == 'male' && user.device == 'ios'){
            this.statsData.gender.male.ios++
       } 
       if(user.gender == 'male' && user.device == 'android'){
            this.statsData.gender.male.android++
       }

        if(user.gender == 'female' && user.device == 'ios'){
            this.statsData.gender.female.ios++
       } 
       if(user.gender == 'female' && user.device == 'android'){
            this.statsData.gender.female.android++
       }
    });

     this.statsData.cityWiseData = Object.keys(usersObject).map((key) => [{city:key,users: usersObject[key]}]);
    this.calcualtePercenatage();
  }

  percentage(partialValue:number, totalValue:number) {
   return ((100 * partialValue) / totalValue).toFixed(2);
  } 

  showChart : boolean = false;
  calcualtePercenatage(){
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
          }
        }
      },
      fill: {
        colors: ["#0E7ECA", "#019F98"],
      },

      labels: ["iOS users", "Android users"],
    };

    this.showChart = true;
     this.MaleChart = this.chartOptions;
     this.MaleChart.series = [
        this.percentage(this.statsData.gender.male.ios,this.statsData.gender.male.ios+this.statsData.gender.male.android),
        this.percentage(this.statsData.gender.male.android,this.statsData.gender.male.ios+this.statsData.gender.male.android),
      ];
     this.FemaleChart = this.chartOptions;
      this.FemaleChart.series = [
        this.percentage(this.statsData.gender.female.ios,this.statsData.gender.female.ios+this.statsData.gender.female.android),
        this.percentage(this.statsData.gender.female.android,this.statsData.gender.female.ios+this.statsData.gender.female.android),
      ];

  };
   estfilters = [
    { value: "jan", name: "January" },
    { value: "feb", name: "February" },
    { value: "mar", name: "March" },
  ];

}
