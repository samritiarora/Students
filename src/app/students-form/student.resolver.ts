import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Student, StudentsService } from '../shared/students.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class StudentsResolver implements Resolve<Observable<Student[]>> {

  constructor(
    private studentsService: StudentsService) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Student[]> {
    debugger;
    console.log("Inside resolver getting list");
    return this.studentsService.studentObs;
    // console.log("Exit resolver got list", this.studentsService.studentObs);
    // return this.studentsService.studentObs;
    // .pipe(
    //   //take(1),
    //   map((profile: Student[]) => profile));;
  }
}