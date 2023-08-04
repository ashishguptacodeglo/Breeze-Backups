import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DaterangepickerDirective } from "ngx-daterangepicker-material";
import * as moment from "moment";
import intlTelInput from "intl-tel-input";
declare var intlTelInputUtils;

@Component({
  selector: 'app-est-as-restaurant',
  templateUrl: './est-as-restaurant.component.html',
  styleUrls: ['./est-as-restaurant.component.scss']
})
export class EstAsRestaurantComponent implements OnInit {

  options: any = {
    autoApply: false,
    alwaysShowCalendars: true,
    showCancel: false,
    showClearButton: false,
    linkedCalendars: true,
    singleDatePicker: false,
    showWeekNumbers: false,
    showISOWeekNumbers: false,
    customRangeDirection: true,
    lockStartDate: false,
    closeOnAutoApply: true,
  };
  selectedDates: any = { startDate: moment.isMoment, endDate: moment.isMoment };
  ShowCalendar = false;

  @ViewChild("telInput") telInput;
  @Input() phoneNumber = "";
  @Input() cssClass = "form-control";
  @Output() phoneNumberChange = new EventEmitter<string>();
  iti;
  isInvalid = false;
  selectedCountryCode;
  imagesArray: any = [1, 2, 3, 4, 5, 6];

  @ViewChild(DaterangepickerDirective) pickerDirective: any =
  DaterangepickerDirective;

  constructor(private modalService: NgbModal) {
    // this.alwaysShowCalendars = true;
    // console.log(this.ranges)
  }


  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.iti = intlTelInput(this.telInput.nativeElement, {
      utilsScript: "assets/scripts/utils.js",
      separateDialCode: true,
      nationalMode: true,
      customContainer: "profile-phone-code",
      formatOnDisplay: true,
    });
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
  }

  ngOnChanges(changes: SimpleChanges) { }

  ngOnDestroy() {
    this.iti.destroy();
  }

  onFocus = () => {
    if (this.phoneNumber == undefined || this.phoneNumber == "") {
      var getCode = this.iti.getSelectedCountryData().dialCode;
      this.phoneNumber = "+" + getCode;
    }
  };

  onBlur = () => {
    this.isInvalid = false;
    if (this.phoneNumber != undefined && this.phoneNumber.trim()) {
      if (this.iti.isValidNumber()) {
        this.isInvalid = false;
      } else {
        this.isInvalid = true;
      }
    }
  };

  onInputKeyPress = (event: KeyboardEvent) => {
    const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/;
    const allowedOtherKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Home", "End", "Insert", "Delete", "Backspace"];
    if (!allowedChars.test(event.key) && !(event.ctrlKey && allowedCtrlChars.test(event.key)) && !allowedOtherKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  formatIntlTelInput() {
    if (typeof intlTelInputUtils !== "undefined") {
      var currentText = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
      if (typeof currentText === "string") {
        this.iti.setNumber(currentText);
      }
    }
  }

  onPhoneNumberChange = () => {
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
    this.formatIntlTelInput();
    console.log(this.phoneNumber);
  };

  propertyManagementForm = new FormGroup({
    cleanWhenOccupied: new FormControl(null, [Validators.required]),
    cleanWhenBooked: new FormControl(null, [Validators.required]),
  });


  priorBookingDays = [
    { value: "1 day", name: "1 day" },
    { value: "2 days", name: "2 days" },
    { value: "3 days", name: "3 days" },
    { value: "4 days", name: "4 days" },
    { value: "5 days", name: "5 days" },
    { value: "6 days", name: "6 days" },
    { value: "7 days", name: "7 days" },
  ];

  freeCancellation = [
    { value: "1 day", name: "1 day" },
    { value: "2 days", name: "2 days" },
    { value: "3 days", name: "3 days" },
    { value: "4 days", name: "4 days" },
    { value: "5 days", name: "5 days" },
    { value: "6 days", name: "6 days" },
    { value: "7 days", name: "7 days" },
  ];

  @ViewChild("OpenModalButton") OpenModalButton: any;


  modalProperties: any = {
    action: 'snooze',
    snooze: {
      startDate: "",
      endDate: "",
      showCalendar: false,
      step: 'form'
    },
    maintanance: {
      startDate: "",
      endDate: "",
      showCalendar: false,
      step: 'form'
    },
    delete: {
      reason: "",
      step: 'form',
    }
  };
  openDatepicker(step: any) {
    this.ShowCalendar = true;
    this.modalProperties[step].showCalendar = true;
  }

  choosedDate(data: any, step: any) {
    if (data.startDate == null || data.endDate == null) { return; } {
      this.modalProperties[step].startDate = moment(data.startDate.$d).format("YYYY-MM-DD");
      this.modalProperties[step].endDate = moment(data.endDate.$d).format("YYYY-MM-DD");
      this.modalProperties[step].showCalendar = false;
    }
  }

  onItemChange(e: any) {
    var checked = e.target.value;
    if (checked == 'deactivate') {
      this.modalProperties.action = 'delete';
      this.modalProperties.delete.step = 'predefined';
    }
    if (checked == 'snooze' || checked == 'maintanance') {
      this.modalProperties.action = checked;
    }


    if (checked == 'deactivate' || checked == 'snooze' || checked == 'maintanance') {
      this.OpenModalButton.nativeElement.click();
    }
    console.log(this.modalProperties)
  }

  ShowDeleteModal() {
    this.modalProperties.action = 'delete';
    this.modalProperties.delete.step = 'predefined';
  }
  ShowPreviousStep(step: any) {
    this.modalProperties[step].showCalendar = false;
  }

  SubmitSnooze(step: any) {
    console.log(this.modalProperties)
    this.modalProperties[step].step = 'thankyou';
  }
  DeleteListing() {
    this.modalProperties.delete.step = 'thankyou';
  }
  deactivateReasons = [
    { id: 1, value: "Going on an extended vacation or leaving town for an extended period of time." },
    { id: 2, value: "Needing to make significant repairs or renovations to the property." },
    { id: 3, value: "Personal reasons, such as a change in living situation or financial circumstances." },
    { id: 4, value: "Finding long-term tenants who will occupy the property for an extended period of time and provide a more stable source of income." },
    { id: 5, value: "Experiencing issues with guests, such as damage to the property or disruptive behavior, and needing to take time to resolve these issues before re-listing the property." },
    { id: 6, value: "I don't like the Breeze platform." },
    { id: 7, value: "I have other reasons." },
  ];

  ReasonField(event: any, action) {
    if (action == 'delete') {
      this.modalProperties.delete.reason = event.target.value;
    }
  }

  ReinitalizeModal() {
    this.modalProperties = {
      action: 'snooze',
      snooze: { startDate: "", endDate: "", showCalendar: false, step: 'form' },
      delete: { reason: "", step: 'form' }
    }
  }

  ReasonChange(e: any, last) {
    var checked = e.target.value;
    if (last) {
      this.modalProperties.delete.step = 'other';
    } else {
      this.modalProperties.delete.reason = checked;
    }
  }

  disbale = {
    desc: true,
    contact: true,
    guesttype: true,
    safety: true,
    houserule: true,
    policies: true,
  }
  goBack() {
    this.modalProperties.delete.step = 'predefined';
  }
  enableEdit(step: any) {
    this.disbale[step] = false;
    this.checkIfactive();
  }

  checkIfactive() {
    var enable = !this.disbale.desc || !this.disbale.contact || !this.disbale.guesttype || !this.disbale.safety || !this.disbale.houserule || !this.disbale.policies
    return enable;
  }

  // Status Dropdown

  actionsList = [
    { value: "active", name: "Active" },
    { value: "inreview", name: "In Review" },
    { value: "removed", name: "Removed" },
  ];

  status: any = "";

  stepsStatus: any = {
    location: 'inreview'
  };

  statusChangeNgSelect(event: any, step: any) {
    this.stepsStatus[step] = event.value;
  }


}
