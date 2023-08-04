import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-restaurant-policies',
  templateUrl: './restaurant-policies.component.html',
  styleUrls: ['./restaurant-policies.component.scss']
})
export class RestaurantPoliciesComponent implements OnInit {

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
    policyContent: new FormControl({ value: '', disabled: false }, [Validators.required])
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
    { value: '1 day', name: '1 day' },
    { value: '2 days', name: '2 days' },
    { value: '3 days', name: '3 days' },
    { value: '4 days', name: '4 days' },
    { value: '5 days', name: '5 days' },
    { value: '6 days', name: '6 days' },
    { value: '7 days', name: '7 days' },
  ];

  cancellationDropdown = [
    { value: '1 day', name: '1 day' },
    { value: '2 days', name: '2 days' },
    { value: '3 days', name: '3 days' },
    { value: '4 days', name: '4 days' },
    { value: '5 days', name: '5 days' },
    { value: '6 days', name: '6 days' },
    { value: '7 days', name: '7 days' },
  ];

  itemSelected(e: any) {
    console.log(e);
  }

}
