import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonReadComponent } from './json-read.component';

describe('JsonReadComponent', () => {
  let component: JsonReadComponent;
  let fixture: ComponentFixture<JsonReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
