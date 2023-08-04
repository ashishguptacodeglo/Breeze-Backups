import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import intlTelInput from "intl-tel-input";
declare var intlTelInputUtils;


@Component({
  selector: 'app-est-as-property',
  templateUrl: './est-as-property.component.html',
  styleUrls: ['./est-as-property.component.scss']
})
export class EstAsPropertyComponent implements OnInit {

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

  @ViewChild("telInput") telInput;
  @Input() phoneNumber = "";
  @Input() cssClass = "form-control";
  @Output() phoneNumberChange = new EventEmitter<string>();
  iti;
  isInvalid = false;
  selectedCountryCode;
  imagesArray: any = [1, 2, 3, 4, 5, 6];

  constructor(private modalService: NgbModal) {
    // this.alwaysShowCalendars = true;
    // console.log(this.ranges)
  }


  ngOnInit(): void {
    var d = new Date(),
      h = 0.0,
      m = 0,
      meridiem = ["AM", "PM"];
    for (var i = h; i < 24; ++i) {
      for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {
        var time =
          (i % 12) + ":" + (j * 15 || "00") + " " + meridiem[(i / 12) | 0];
        this.timeArray.push({ value: time, name: time });
      }
    }
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
    safetyMeasures: new FormArray([], [Validators.required]),
  });

  maritalStatus = [
    { value: 1, name: "Yes" },
    { value: 0, name: "No" },
  ];

  safetyMeasuresArray: string[] = ["24/7 Security", "CCTV cameras (in public areas)", "Carbon monoxide alarms", "Smoke detectors", "Fire extinguishers", "Fire alarms", "Electronic Locks"];

  safetyMeasuresOnChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;
    const checkedArray = this.propertyManagementForm.get("safetyMeasures") as FormArray;
    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    } else {
      const index = checkedArray.controls.findIndex(
        (x) => x.value === checkedValue
      );
      if (index >= 0) {
        checkedArray.removeAt(index);
      }
    }

    //console.log(checkedArray.value);
  }

  timeArray: any = [];
  showQuiteHoursTiming = false;

  getSelectedValue(value: any) { }

  onQuiteHoursChange(value: string): void {
    this.showQuiteHoursTiming = value === "0";
    if (value === "1") {
      this.propertyManagementForm.get("quiteHoursCheckinTime")?.clearValidators();
      this.propertyManagementForm.get("quiteHoursCheckoutTime")?.clearValidators();
      this.propertyManagementForm.get("quiteHoursCheckinTime")?.updateValueAndValidity();
      this.propertyManagementForm.get("quiteHoursCheckoutTime")?.updateValueAndValidity();
    } else {
      this.propertyManagementForm.get("quiteHoursCheckinTime")?.setValidators([Validators.required]);
      this.propertyManagementForm.get("quiteHoursCheckoutTime")?.setValidators([Validators.required]);
      this.propertyManagementForm.get("quiteHoursCheckinTime")?.updateValueAndValidity();
      this.propertyManagementForm.get("quiteHoursCheckoutTime")?.updateValueAndValidity();
    }
  }

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

  checkInMethod = [
    { value: "self-checkin", name: "Self check-in" },
    { value: "others", name: "Others" },
  ];


  disbale = {
    desc: true,
    contact: true,
    guesttype: true,
    safety: true,
    houserule: true,
    policies: true,
  }

  checkIfactive() {
    var enable = !this.disbale.desc || !this.disbale.contact || !this.disbale.guesttype || !this.disbale.safety || !this.disbale.houserule || !this.disbale.policies
    return enable;
  }
  getRandomImages() {
    const months = ["assets/img/dashboard/restaurant-dish1.svg", "assets/img/dashboard/restaurant-dish2.svg", "assets/img/dashboard/restaurant-dish3.svg"];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  }

  nearByLocations = [
    { name: "Casino Palms", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
    { name: "White sand Restaurant", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
    { name: "Oakland International Airport", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
    { name: "Children’s park", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
    { name: "Tracy Station", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
    { name: "Casino Palms", distance: "1.2 miles from the property", images: [this.getRandomImages(), this.getRandomImages(), this.getRandomImages()] },
  ];

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
