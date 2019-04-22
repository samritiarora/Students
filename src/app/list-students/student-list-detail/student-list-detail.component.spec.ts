import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListDetailComponent } from './student-list-detail.component';

describe('StudentListDetailComponent', () => {
  let component: StudentListDetailComponent;
  let fixture: ComponentFixture<StudentListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
