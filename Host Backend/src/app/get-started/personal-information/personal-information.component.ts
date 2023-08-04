import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonservicesService } from '../../services/commonservices/commonservices.service'

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private router: Router,private CommonApiService : CommonservicesService) { 

  }
  hostingDropdown = [
    { value: 'Property', name: 'Property' },
    { value: 'Restaurants', name: 'Restaurants' }
  ];
  
  ngOnInit(): void {
    // this.gethostCategoryMaster();
  }
  gethostCategoryMaster(){
       this.CommonApiService.gethostCategoryMaster().subscribe((results:any) => {
      this.hostingDropdown = results.data.map((data)=>{
         return { value: data._id, name: data.hostCategory };
      })
    }, (error) => {
      console.log(error)
    });   
}

  personalinfo = new FormGroup({
    ufname: new FormControl('', [Validators.required]),
    ulname: new FormControl('', [Validators.required]),
    uemail: new FormControl('', [Validators.required, Validators.email]),
    uphone: new FormControl('', [Validators.required]),
    //uwebsite: new FormControl(''),
    hosting: new FormControl(null, [Validators.required]),
    propertyName: new FormControl('', [Validators.required])
  })

  
  submitPersonalForm() {
    const selectedHosting = this.personalinfo.value.hosting as unknown as string;

    console.log(this.personalinfo,selectedHosting);
    if (selectedHosting === 'Restaurants') {
      this.router.navigate(['/host-restaurant/restaurant-basic-information']);
    } else if (selectedHosting === 'Property') {
      this.router.navigate(['/host-property/describe-property']);
    }

    // var post = {};
    // var post = this.personalinfo.value;
    // // post.countryCode = 91;
    // // this.CommonApiService.createHostBasicInfo(post).subscribe((result:any) => {
    // //    console.log(result);
    // // }, (error) => {
    // //    console.log(error)
    // // });   
    // this.router.navigate(['/host-property/describe-property']);
  }
  

  itemSelected(e:any)
  {
    console.log(e);
  }
}
