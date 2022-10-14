import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeFormFieldComponent } from './custom.component';

describe('CustomeFormFieldComponent', () => {
  let component: CustomeFormFieldComponent;
  let fixture: ComponentFixture<CustomeFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomeFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
