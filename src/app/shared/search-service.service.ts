import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private _students: BehaviorSubject<Student[]>;
  private _current: BehaviorSubject<Student[]>;
  private dataStore: {
    students: Student[]
  };

  constructor() {
    this.dataStore = { students: [] };
    this._students = <BehaviorSubject<Student[]>>new BehaviorSubject([]);
    this._current = <BehaviorSubject<Student[]>>new BehaviorSubject([]);
  }



  setCurrentStudentsInView(studentsList: Student[]) {
    console.log("in method setCurrentStudentsInView", studentsList);
    this.dataStore.students = studentsList;
    this._students.next(Object.assign({}, this.dataStore).students);
    //this._students.next(Object.assign({}, studentsList));
  }

  get students() {
    return this._students.asObservable();
  }

  getSearchResults(term: string) {
    console.log("getSearchResults method called");
    var current: Student[] = [];
    console.log("this._students.getValue()", this._students.getValue());

    this._students.getValue().forEach(item => {
      console.log("each item", item);
      if (item.studentName.toLowerCase().includes(term.toLowerCase())) {
        current.push(item);
      }
    });
    console.log("searched result", current);
    this._current.next(Object.assign([], current));
    return this._current.asObservable();
  }


  get current() {
    return this._current.asObservable();
  }
}
