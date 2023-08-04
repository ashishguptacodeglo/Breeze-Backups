import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, OnDestroy } from '@angular/core';
import intlTelInput from 'intl-tel-input';
declare var intlTelInputUtils;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})



export class ProfileComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy{
    @ViewChild('telInput') telInput;
    @Input() phoneNumber = '';
    @Input() cssClass = 'form-control';
    @Output() phoneNumberChange = new EventEmitter<string>();
    iti;
    isInvalid = false;
    selectedCountryCode;

    constructor(){

    }

    ngOnInit(){
        
    }
    ngAfterViewInit(){
        this.iti = intlTelInput(this.telInput.nativeElement, {
            utilsScript: "assets/scripts/utils.js",
            separateDialCode: true,
            nationalMode: true,
            customContainer: "profile-phone-code",
            formatOnDisplay: true,
        });
        this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
    }
    ngOnChanges(changes: SimpleChanges) {
    
    }
    ngOnDestroy(){
        this.iti.destroy();
    }

    onFocus = () =>{
        if(this.phoneNumber == undefined || this.phoneNumber == ""){
            var getCode = this.iti.getSelectedCountryData().dialCode;
            this.phoneNumber = "+" + getCode;
        }
    }
    
    onBlur = ()=>{
        this.isInvalid = false;
        if(this.phoneNumber != undefined && this.phoneNumber.trim()){
            if(this.iti.isValidNumber()){
                this.isInvalid = false;
            }
            else{
                this.isInvalid = true;
            }
        }   
    }

    onInputKeyPress = (event: KeyboardEvent) =>{
        const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/;
    const allowedOtherKeys = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'Home',
      'End',
      'Insert',
      'Delete',
      'Backspace',
    ];

    if (
      !allowedChars.test(event.key) &&
      !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
      !allowedOtherKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
    }

    formatIntlTelInput() {
        if (typeof intlTelInputUtils !== 'undefined') { 
            var currentText = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
            if (typeof currentText === 'string') { 
                this.iti.setNumber(currentText); 
            }
        }
    }

    onPhoneNumberChange = () =>{
        this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
        this.formatIntlTelInput();
        console.log(this.phoneNumber)
        // this.phoneNumberChange.emit(this.phoneNumber);
    }
}
