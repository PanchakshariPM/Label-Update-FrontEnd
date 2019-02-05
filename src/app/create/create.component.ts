import { Component, OnInit, NgModule, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  countryModel: any;
  projectNameModel: any;

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  projectName = new FormControl('', [Validators.required]);
  docType = new FormControl('', [Validators.required]);
  countryType = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.projectName.hasError('required') ? 'You must enter a value' :
      this.projectName.hasError('projectName') ? 'Not a valid name' :
        '';
  }

  getErrorMessageForDocType() {
    return this.docType.hasError('required') ? 'You must select a document' :
      this.docType.hasError('docType') ? 'Not a valid document' :
        '';
  }

  getErrorMessageForCountryType() {
    return this.countryType.hasError('required') ? 'You must select a Country' :
      this.countryType.hasError('countryType') ? 'Not a valid option' :
        '';
  }


  constructor() { }

  ngOnInit() {
  }

  afuConfig = {
    multiple: true,
    formatsAllowed: ".jpg,.png",
    maxSize: "1",
    uploadAPI: {
      url: "https://example-file-upload-api",
      // headers: {
      // "Content-Type" : "text/plain;charset=UTF-8",
      // "Authorization" : `Bearer ${token}`
      // }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false
  };

}
