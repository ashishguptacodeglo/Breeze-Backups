import { Component,OnInit,ViewChild,ElementRef,NgZone, } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from "@angular/router";



@Component({
  selector: "app-property-location",
  templateUrl: "./property-location.component.html",
  styleUrls: ["./property-location.component.scss"],
})
export class PropertyLocationComponent implements OnInit {
  latitude: number = 123;
  longitude: number = 123;
  province: any = "";
  zip_code: any = "";
  country: any = "";
  zoom: number = 123;
  id: any;
  address: string = "Chennai";
  private geoCoder: any;
  @ViewChild("search") public searchElementRef!: ElementRef | any;

   addressform = this.fb.group({
      address: ['', Validators.required],
      province: ['', Validators.required],
      zip_code: ['', Validators.required],
      country: ['', Validators.required],
      description: [''],
  });


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.address = place.name+' '+place.formatted_address;
          // this.addressform.get("address").setValue(this.address);
          console.log(place)

          this.zoom = 12;
          this.setZipCodeandProvice(place);
        });
      });
    });
  }
  public setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  setZipCodeandProvice(result:any){
    this.zip_code = "";
    this.province = "";
    for(var j=0; j<result.address_components.length; j++){
        var types = result.address_components[j].types;
        for(var k = 0; k < types.length; k++) {
          if(types[k] == 'postal_code') {
            this.zip_code = result.address_components[j].long_name;
           } else if(types[k] == 'administrative_area_level_1') {
            this.province = result.address_components[j].long_name
           }else  if(types[k] == 'country'){
              this.country = result.address_components[j].long_name
           }
        }
      }
    this.addressform.setValue({ 
      address: this.address,
      province: this.province,
      zip_code: this.zip_code,
      country: this.country,
      description: "",
    }); 

  }
  getAddress(latitude:any, longitude:any) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } },(results:any, status:any) => {
        if (status === "OK") {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
             this.addressform.setValue({ 
                address: this.address,
                province:"",
                zip_code: "",
                country: "" ,
                description: ""
              }); 
            this.setZipCodeandProvice(results[0]);
          } else {
            // window.alert("No results found");
          }
        } else {
          // window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

   onSubmit() {
    console.log(this.addressform.value);
    this.router.navigate(['/host-property/property-amenities']);
  }

  goBack() {
    this.router.navigate(['/host-property/property-description']);
  }

}
