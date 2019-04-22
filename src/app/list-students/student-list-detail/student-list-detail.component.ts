import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-student-list-detail',
  templateUrl: './student-list-detail.component.html',
  styleUrls: ['./student-list-detail.component.css']
})
export class StudentListDetailComponent implements OnInit {
  @Input() student: Student;
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
  }

  deleteStudent(id: number){
    this.studentsService.remove(id);
  }

}
