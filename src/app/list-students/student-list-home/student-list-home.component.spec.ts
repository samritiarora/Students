import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListHomeComponent } from './student-list-home.component';

describe('StudentListHomeComponent', () => {
  let component: StudentListHomeComponent;
  let fixture: ComponentFixture<StudentListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
