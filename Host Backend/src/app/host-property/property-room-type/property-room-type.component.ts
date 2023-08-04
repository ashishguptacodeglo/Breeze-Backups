import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-room-type',
  templateUrl: './property-room-type.component.html',
  styleUrls: ['./property-room-type.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyRoomTypeComponent implements OnInit {

  constructor(private router: Router) { }

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

  bedsAvailable = [
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

  roomsAvailable = [
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

  bedTypeArray: string[] = ['Double Bed', 'Twin Bed', 'Queen Bed', 'Trundle Bed', 'Pod Bed', 'Bunk Bed', 'Sofa Bed', 'Murphy Bed', ' King Bed', 'Single Bed', '2 Single Beds', 'Standard Bed'];

  itemSelected(e: any) {
    // console.log(e);
  }

  bedTypeOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.addRoomForm.get('bedType') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      const index = checkedArray.controls.findIndex(x => x.value === checkedValue);
      if (index >= 0) {
        checkedArray.removeAt(index);
      }
    }

    //console.log(checkedArray.value);
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

  addRoomForm = new FormGroup({
    roomName: new FormControl([], [Validators.required]),
    roomShared: new FormControl([], [Validators.required]),
    privateBathroom: new FormControl([], [Validators.required]),
    guestCapacity: new FormControl(null, [Validators.required]),
    bedsAvailable: new FormControl(null, [Validators.required]),
    roomsAvailable: new FormControl('', [Validators.required]),
    pricePerNight: new FormControl('', [Validators.required]),
    bedType: new FormArray([], [Validators.required])
  });

  getRRoomFormDetails() {
    console.warn(this.addRoomForm.value);
  }

  moveNext() {
    this.router.navigate(['/host-property/property-description']);
  }

  goBack() {
    this.router.navigate(['/host-property/place-type']);
  }

  imagesArray: any = [1, 2, 3, 4, 5, 6];

  files: File[] = [];
  onSelect(event: any) {
    this.files.push(...event.addedFiles);

    console.log(this.files)
  }


  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }



}
