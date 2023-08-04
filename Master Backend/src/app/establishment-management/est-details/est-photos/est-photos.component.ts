import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est-photos',
  templateUrl: './est-photos.component.html',
  styleUrls: ['./est-photos.component.scss']
})
export class EstPhotosComponent implements OnInit {

  tab = 'categorylist';
  constructor() {
  }

   getRandomStatus() {
   
  }

  ngOnInit(): void {
   
  }
  
   setStep(tab:any){
    this.tab = tab;
   }



}
