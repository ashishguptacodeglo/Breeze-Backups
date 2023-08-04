import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';


@Component({
  selector: 'app-restaurant-table-availability',
  templateUrl: './restaurant-table-availability.component.html',
  styleUrls: ['./restaurant-table-availability.component.scss']
})
export class RestaurantTableAvailabilityComponent implements OnInit ,OnDestroy {

   constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }  

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  editor: Editor = new Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    // ['link', 'image'],
    // ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  addPolicyForm = new FormGroup({
    policyName: new FormControl('', [Validators.required]),
    policyContent: new FormControl({ value: '', disabled: false },[Validators.required])
  });


  getPolicyInfo() {
    console.warn(this.addPolicyForm.value);
  }


  propertyPolicyForm = new FormGroup({
    bookingDropdown: new FormControl(null, [Validators.required]),
    cancellationDropdown: new FormControl(null, [Validators.required]),
  });


  getPropertyPolicyInfo() {
    console.warn(this.propertyPolicyForm.value);
  }

  selectedValue: any = null;

  bookingDropdown = [
    { value: 'Table for 2', name: 'Table for 2' },
    { value: 'Table for 2', name: 'Table for 2' },
    { value: 'Table for 6' , name: 'Table for 6' },
    { value: 'Family dining tables', name: 'Family dining tables' },
  ];

 

  itemSelected(e:any)
  {
    console.log(e);
  }

}
