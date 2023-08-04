import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  collapse:boolean = false;

  MenusList : any = [
    {title:"Approval",link:"../approval",icon:"/assets/img/master-backend/approval.svg", submenusList:[]},
    {title:"Establishment Updates",link:"../establishment-update",icon:"/assets/img/master-backend/est-update.svg", submenusList:[]},
    {title:"Establishment Management",link:".../establishment-management",icon:"/assets/img/master-backend/est-management.svg", submenusList:[]}

  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.MenusList)
  }

   collapsenavbar() {
    console.log("Collasped Navebar");
    this.collapse = !this.collapse;
    // this.dataService.sendData(this.collapse);
  }

  hasSubmenu(itemEl: HTMLElement){
    console.log("I am Having submenu");
    itemEl.classList.toggle("showMenu");
  }
}
