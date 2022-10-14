import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomComponent,
      multi: true
    }]
})

export class CustomComponent implements ControlValueAccessor {
  field = "";
  @Input() mycontrol: any;
  loaded = false;
  constructor() { }
  ngOnInit(): void {
    this.loaded = true;
    // console.log(this.mycontrol)

  }
  onChange: any = () => { }
  onTouch: any = () => { }

  // sets the value used by the ngModel of the element
  set value(val: string) {
    this.field = val
    this.onChange(val)
    this.onTouch(val)
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.value = value
  }

  // When the value in the UI is changed, this method will invoke a callback function
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}