import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from 'src/app/shared/students.service';
import { Observable, of, Subject } from 'rxjs';
import { SearchServiceService } from 'src/app/shared/search-service.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-student-list-home',
  templateUrl: './student-list-home.component.html',
  styleUrls: ['./student-list-home.component.css']
})
export class StudentListHomeComponent implements OnInit {
  listOfStudents: Student[];
  copyListOfStudents: Student[];
  errorMessage: string;
  searchResults: Student[];
  heroes$: Observable<Student[]>;
  private searchTerms = new Subject<string>();

  constructor(private studentsService: StudentsService, private searchService: SearchServiceService) { }

  ngOnInit() {
    //this.studentsService.loadAll();
    this.studentsService.studentObs.subscribe(
      (v => { this.listOfStudents = v; this.copyListOfStudents = this.listOfStudents;
        console.log(this.listOfStudents);
        this.searchService.setCurrentStudentsInView(this.listOfStudents); 
      }),
      (e => console.log('error: ', e)),
      (() => console.log('the sequence completed!')));

      this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),
  
        // ignore new term if same as previous term
        distinctUntilChanged(),
  
        // switch to new search observable each time the term changes
        switchMap((term: string) => this.searchService.getSearchResults(term)),
      );
    // this.studentsService.students.subscribe(data =>
    //   this.listOfStudents = data,
    //   error => this.errorMessage = error,
    //   () => {
    //     console.log('observable list i ya nahi', this.listOfStudents);this.copyListOfStudents = this.listOfStudents});


  }

  displayFilteredStudents(filterVal: any) {
    console.log("inside on change select", filterVal);
    console.log('this.copyListOfStudents', this.copyListOfStudents);
    //clear on every onChange
    this.listOfStudents = this.copyListOfStudents;
    if (filterVal != '0') {
      this.listOfStudents = this.listOfStudents.filter(item => {
        return item.category.toLowerCase().includes(filterVal);
      });
      console.log("Filtered listOfStudenents", this.listOfStudents);
    }
    this.searchService.setCurrentStudentsInView(this.listOfStudents);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Student[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.searchService.getSearchResults(term);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log("search called from component with term", term);
    this.searchTerms.next(term);
  }

}
