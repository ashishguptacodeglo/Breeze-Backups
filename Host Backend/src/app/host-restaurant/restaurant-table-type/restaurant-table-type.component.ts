import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
    import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-table-type',
  templateUrl: './restaurant-table-type.component.html',
  styleUrls: ['./restaurant-table-type.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantTableTypeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }


  price = 0;

  guestCapacity = [
    { value: '1', name: '1' },
    { value: '2', name: '2' },
    { value: '3', name: '3' },
    { value: '4', name: '4' },
    { value: '5', name: '5' },
    { value: '6', name: '6' },
    { value: '7', name: '7' },
    { value: '8', name: '8' },
    { value: '9', name: '9' },
    { value: '10', name: '10' },
  ];


  itemSelected(e: any) {
    // console.log(e);
  }

  // Update price on button click

  updatePrice(value: number) {
    this.price = Math.max(this.price + value, 0);
  }

  // Update on textbox price change

  onPriceChange() {
    const input = document.getElementById('price-input') as HTMLInputElement;
    if (input) {
      const parsedPrice = parseFloat(input.value);
      this.price = isNaN(parsedPrice) ? 0 : parsedPrice;
    }
  }

  addTableForm = new FormGroup({
    tableName: new FormControl([], [Validators.required]), 
    guestCapacity: new FormControl(null, [Validators.required]),    
    pricePerNight: new FormControl('', [Validators.required]),
    tableAvailable: new FormControl('', [Validators.required]),
  });

  getTableFormDetails() {
    console.warn(this.addTableForm.value);
  }

  imagesArray: any = [1, 2, 3, 4, 5, 6];
  
  files: File[] = [];
  onSelect(event: any) {
    this.files.push(...event.addedFiles);

    console.log( this.files)
  }
  
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  moveNext(){
      this.router.navigate(['/host-restaurant/restaurant-location'])
  } 

  goBack(){
      this.router.navigate(['/host-restaurant/restaurant-description'])
  }
}
