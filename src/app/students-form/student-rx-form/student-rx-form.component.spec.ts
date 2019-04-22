import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRxFormComponent } from './student-rx-form.component';

describe('StudentRxFormComponent', () => {
  let component: StudentRxFormComponent;
  let fixture: ComponentFixture<StudentRxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
