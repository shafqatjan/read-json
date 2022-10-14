import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import studentForm from '../../assets/form.json';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash'; 


@Component({
  selector: 'app-json-form-task',
  templateUrl: './json-form-task.component.html',
  styleUrls: ['./json-form-task.component.scss']
})
export class JsonFormTaskComponent implements OnInit {
  myForm: FormGroup;
  loaded = false;
  data: string;
  mystudentforms: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(studentForm.controls)

    this.mystudentforms = studentForm.controls;
    this.myForm = this.fb.group({
      rnd: new FormControl('')
    });
    if (this.mystudentforms.length > 0) {

      this.mystudentforms.forEach((element: any) => {
        // console.log(element)
        let validations: any = [];

        if (element.required) {
          validations.push(Validators.required)
        }
        if (element.min) {
          validations.push(Validators.min(element.min))
        }
        if (element.max) {
          validations.push(Validators.max(element.max))
        }


        this.myForm.addControl(element.name, new FormControl('', validations));

      });
      this.loaded = true;

      let settings = studentForm.settings;
      console.log(settings);

      const keys = Object.keys(settings);
      keys.forEach((element:any) => {
        let rule = _.get(settings, element);
        this.formControl(rule.condition.control).valueChanges.subscribe(x => {
          this.formControl(rule.name).clearValidators();
          switch(rule.condition.operator){
            case '>=':
              if(x >= rule.condition.value){
                this.formControl(rule.name).setValidators([Validators.required])
              }
            break;
          }
          this.formControl(rule.name).updateValueAndValidity();
       })
      });

    }
  }
  formControl(name: any): FormControl {

    // console.log(name, this.parentForm.controls[name].errors)
    return this.myForm.controls[name] as FormControl
  }
  getControls() {
    return Object.keys(this.myForm.controls) || [];
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Form Values ', form.value);
    this.newItemEvent.emit(form.value);
  }
}
