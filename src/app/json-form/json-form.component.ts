import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import studentForm from '../students_form.json';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit {
  myForm: FormGroup;
  loaded = false;
  data:string;
  mystudentforms: any = [];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log(studentForm)
    this.mystudentforms = studentForm;
    this.myForm = this.fb.group({
      rnd: new FormControl('')
    });
    if (studentForm.length > 0) {

      studentForm.forEach(element => {

        let validations: any = [];
        element.validation.forEach(el => {
          if (el == 'required') {
            validations.push(Validators.required)
          }
          if (el =='email') {
            validations.push(Validators.email)
          }
          if (el.indexOf('min:') != -1) {
            const parts:any = el.split(':');
            validations.push(Validators.minLength(parts[1]))
          }
          if (el.indexOf('max:') != -1) {
            const parts:any = el.split(':');
            validations.push(Validators.maxLength(parts[1]))
          }
        })

        this.myForm.addControl(element.name, new FormControl('', validations));

      });
      this.loaded = true;
      // console.log(this.myForm);
    }
    // this.myForm = this.fb.group({
    //   name: ['Sammy', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   message: ['', [Validators.required, Validators.minLength(15)]],
    // });
  }
  formControl(name: any): FormControl  {

    // console.log(name, this.parentForm.controls[name].errors)
    return this.myForm.controls[name] as FormControl
  }
  getControls(){
    return Object.keys(this.myForm.controls) || [];
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Form Values ', form.value);
    this.newItemEvent.emit(form.value);
  }
}
