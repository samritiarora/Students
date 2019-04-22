import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Student {
  id: number;
  studentName: string;
  category: string;
  dob: string;
  //documents
  aliases: string[];
  fatherName: string;
  motherName: string;
  lastClassScore: number;
}
const st = {
  id: 100,
  studentName: 'dummyDomestic',
  category: "domestic",
  aliases: ['true', 'true', 'true', 'true', 'false', 'true', 'true'],
  fatherName: "dummyDomestic",
  motherName: "dummyDomestic",
  dob: "2019-04-11",
  lastClassScore: 20
};
const stInternational = {
  id: 101,
  studentName: 'dummyInternational',
  category: "international",
  aliases: ['true', 'true', 'true', 'true', 'true', 'true', 'true'],
  fatherName: "dummyInternational",
  motherName: "dummyInternational",
  dob: "2019-04-11",
  lastClassScore: 20
};
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // students: Student[] = [st];

  // addStudent(student: Student){
  //   console.log("Adding student-->", student);
  //   this.students.push(student);
  // }

  // get studentsList() {
  //   return this.students;
  // }

  private _students: BehaviorSubject<Student[]>;
  private _student: BehaviorSubject<Student>;
  private dataStore: {
    students: Student[]
  };

  newList: any[];
  s: Observable<Student[]>;

  constructor(private http: HttpClient) {
    this.dataStore = { students: [st, stInternational] };
    this._students = <BehaviorSubject<Student[]>>new BehaviorSubject([]);
    this._student = <BehaviorSubject<Student>>new BehaviorSubject(null);
  }

  get students() {
    //TODO: Figure why is this bad for resolver, the resolver end is nva called
    return this._students.asObservable();
  }

  get studentObs() {
    return of(this.dataStore.students);
  }

  loadAll() {
    this.http.get<Student[]>('/assets/sampleStudents.json').subscribe(data => {
      debugger;
      this.dataStore.students = data;
      console.log("Got Data", data);
      this._students.next(Object.assign({}, this.dataStore).students);
    }, error => console.log('Could not load sample students.'));
    // this.dataStore.students = [st];
    // this._students.next(Object.assign({}, this.dataStore).students);
  }

  loadAllObs(): Observable<Student[]> {
    debugger;
    this.s = this.http.get<Student[]>('/assets/sampleStudents.json');
    this.s.subscribe(data => this.newList = data);
    return this.s;
  }

  getNewList() {
    return this.newList;
  }

  setNewList(data) {
    this.newList.push(data);
  }


  getByName(studentName: string) {
    this.dataStore.students.forEach((item, index) => {
      if (item.studentName === studentName) {
        return this._student.next(item);
      }
    });
  }



  create(student: Student) {
    debugger;
    student.id = new Date().getUTCMilliseconds();
    console.log("Saving value to dataStore", student);
    this.dataStore.students.push(student);
    this._students.next(Object.assign({}, this.dataStore).students);
  }

  update(student: Student) {
    debugger;
    console.log("Updating value to dataStore", student);
    this.dataStore.students.forEach((t, i) => {
      if (t.id === student.id) { console.log("student id found", t.id); this.dataStore.students[i] = student; }
    });

    this._students.next(Object.assign({}, this.dataStore).students);
  }

  remove(id: number) {
    this.dataStore.students.forEach((t, i) => {
      if (t.id === id) { this.dataStore.students.splice(i, 1); }
    });
    this._students.next(Object.assign({}, this.dataStore).students);
  }

}
