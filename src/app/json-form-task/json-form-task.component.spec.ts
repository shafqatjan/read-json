import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormTaskComponent } from './json-form-task.component';

describe('JsonFormComponent', () => {
  let component: JsonFormTaskComponent;
  let fixture: ComponentFixture<JsonFormTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
