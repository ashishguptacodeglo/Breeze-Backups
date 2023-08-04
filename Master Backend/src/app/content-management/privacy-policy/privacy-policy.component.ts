import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  breadCrumb: any  = { 
    level: 2,
    page: 'Content Management ',
  }
  editor: Editor = new Editor;

  toolbar: Toolbar = [
      ['link', 'image'],
    ['text_color', 'background_color'],
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.editor = new Editor();
  }  

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  step = 1;

  addPolicyForm = new FormGroup({
    policyContent: new FormControl({ value: '', disabled: false },[Validators.required])
  });

  policyHtml : any = "";
  getPolicyInfo() {
    this.policyHtml = this.addPolicyForm.value.policyContent;
    this.step = 2;
  }



 
}
