import { Component, OnInit, Input, ElementRef  } from '@angular/core';
import { AuthLoginService } from "../../services/login/auth-login.service"

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  @Input() isfixed: any = false;

  showDropdown: boolean = false;
  notificationToggle:boolean = false;

  constructor(private elementRef: ElementRef,private auth: AuthLoginService) {}

  ngOnInit(): void {
    // console.log(this.isfixed)
  }
  logout(){
    this.auth.logout();
  }
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
  ShowNotifiCationMenu(){
    this.notificationToggle = !this.notificationToggle;
  }

}
