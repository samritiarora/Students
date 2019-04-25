import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface DocReqd {
  docName: string;
  mandatoryForInternational: boolean;
  mandatoryForDomestic: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class DocumentsRequiredService {

  documents$: BehaviorSubject<DocReqd[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getDocumets() {
    const url = '/assets/docsRequired.json';

    return this.http.get<DocReqd[]>(url).pipe(
      tap(data => {
        console.log("inside employee service", data);
        this.documents$.next(data);
      })
    );
  }

  getDocObs(): Observable<DocReqd[]>{
    debugger;
    return this.http.get<DocReqd[]>('/Students/assets/docsRequired.json');
  }

  // //conventional way
  // fetchEmployees() {
  //   const url = '/assets/docsRequired.json';

  //   this.http.get<DocReqd[]>(url).subscribe(data => {
  //     this.documents$.next(data);
  //   });
  // }

  // addNewEmp(emp: DocReqd) {
  //   const currentData = this.documents$.getValue();
  //   const updatedData = [...currentData, emp];

  //   this.documents$.next(updatedData);
  // }
}
