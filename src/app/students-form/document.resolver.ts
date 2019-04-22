import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Student, StudentsService } from '../shared/students.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { DocumentsRequiredService, DocReqd } from '../shared/documents-required.service';

@Injectable()
export class DocumentsResolver implements Resolve<Observable<DocReqd[]>> {

  constructor(
    private documentsService: DocumentsRequiredService) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    debugger;
    console.log("Inside resolver getting doc list");
    return this.documentsService.getDocObs();
    // console.log("Exit resolver got list", this.studentsService.studentObs);
    // return this.studentsService.studentObs;
    // .pipe(
    //   //take(1),
    //   map((profile: Student[]) => profile));;
  }
}