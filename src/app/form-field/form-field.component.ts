import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface MyControl {
  type: String;
  label: String;
  name: String;
  placeholder: String;
  options: any;
}
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() mycontrol: MyControl;
  @Input() parentForm: FormGroup;
  loaded = false;
  constructor() { }

  ngOnInit(): void {

    this.loaded = true;
    
  }
  formControl(name: any): FormControl  {

    // console.log(name, this.parentForm.controls[name].errors)
    return this.parentForm.controls[name] as FormControl
  }
}
