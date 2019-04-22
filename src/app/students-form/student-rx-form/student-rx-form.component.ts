import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { dateValidator } from 'src/app/shared/date-validator.directive';
import { DocumentsRequiredService, DocReqd } from 'src/app/shared/documents-required.service';
import { StudentsService, Student } from 'src/app/shared/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-rx-form',
  templateUrl: './student-rx-form.component.html',
  styleUrls: ['./student-rx-form.component.css']
})
export class StudentRxFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  documents: DocReqd[];
  studentsList: Student[];
  viewOnly: boolean = false;
  viewEditStudentName: number;
  viewEditStudent: Student = {
    id: 0,
    studentName: '',
    category: '',
    aliases: ['', '', '', '', '', '', ''],
    fatherName: '',
    motherName: '',
    dob: '',
    lastClassScore: 0
  };
  edit: boolean = false;
  constructor(private formBuilder: FormBuilder, public documentsService: DocumentsRequiredService,
    private studentsService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //1. Load documents
    //normal
    // this.documentsService.getDocumets().subscribe(data => {
    //   this.documents = data;
    //   console.log("Received documents", data)
    // });
    //from resolver
    console.log("Resolver ka dat for docs a", this.route.snapshot.data);
    this.documents = this.route.snapshot.data['documentsList'];

    //2. Load All Students either by resolver
    console.log("Resolver ka dat for list", this.route.snapshot.data['studentsList']);
    this.studentsList = this.route.snapshot.data['studentsList'];
    // this.studentsService.setNewList(this.route.snapshot.data['studentsList']);

    //console.log("Inside studenForm getting student list");
    // this.route.data//.map((data) => data['todos']) 
    // .subscribe(
    //   (data) => {
    //     console.log("Data got from resolver", data);
    //     debugger;
    //     this.studentsList = data.studentsList;
    //     console.log("Data got from resolver, hence list-->", this.studentsList);
    //   }
    // );
    //   this.studentsService.loadAll();
    //  this.studentsService.students.subscribe(data => this.studentsList = data);
    //console.log("Exite studenForm getting student lis", this.studentsService.setNewList);
    console.log("Data from normal subscribe, hence list-->", this.studentsList);

    //3. Read optional query params
    //action is true if we want to view
    this.viewOnly = this.route.snapshot.paramMap.get('action') == "true";
    this.viewEditStudentName = +this.route.snapshot.paramMap.get('id');
    console.log("Optional parameters as seen", this.viewOnly, this.viewEditStudentName);

    console.log("Data from normal subscribe, hence list111", this.studentsList);
    this.studentsList.forEach((item, index) => {
      if (item.id === this.viewEditStudentName) {
        this.viewEditStudent = item;
      }
    });

    console.log("Found viewEditStudentName", this.viewEditStudent);

    if (this.viewOnly == false && !(!this.viewEditStudentName || 0 === this.viewEditStudentName)) {
      this.edit = true;
    }
    //4. Create form from existing info
    this.registerForm = this.formBuilder.group({
      id:  [{ value: this.viewEditStudent.id, disabled: this.viewOnly }],
      studentName: [{ value: this.viewEditStudent.studentName, disabled: this.viewOnly }, [Validators.required, Validators.minLength(4)]],
      category: [{ value: this.viewEditStudent.category, disabled: this.viewOnly }, Validators.required],
      dob: [{ value: this.viewEditStudent.dob, disabled: this.viewOnly }, [Validators.required, dateValidator(/bob/i)]],
      fatherName: [{ value: this.viewEditStudent.fatherName, disabled: this.viewOnly }, [Validators.required, Validators.minLength(4)]],
      motherName: [{ value: this.viewEditStudent.motherName, disabled: this.viewOnly }, [Validators.required, Validators.minLength(4)]],
      lastClassScore: [{ value: this.viewEditStudent.lastClassScore, disabled: this.viewOnly },
      [Validators.required, Validators.max(100), Validators.min(1)]],
      aliases: this.formBuilder.array([])
    }
    );

    //console.log("form controls-->",this.registerForm.controls.dob.setValue(Date.parse(this.viewEditStudent.dob)));

    this.displayDocumentsList(this.viewEditStudent.category);
    //noDataYet, we need this on change for category
    // console.log("Documents:", this.documents);
  }

  displayDocumentsList(filterVal: any) {
    debugger;
    console.log("inside on change select", filterVal);
    //clear on every onChange
    while (this.aliases.length !== 0) {
      this.aliases.removeAt(0)
    }
    this.documents.forEach((element, index) => {
      var arrOfValidations = [];
      if (filterVal == 'domestic') {
        if (element.mandatoryForDomestic) {
          arrOfValidations.push(Validators.requiredTrue);
        }
      } else if (filterVal == 'international') {
        if (element.mandatoryForInternational) {
          arrOfValidations.push(Validators.requiredTrue);
        }
      }
      console.log("this.viewEditStudent.documents-->", this.viewEditStudent.aliases);
      console.log("Validation for doc", element.docName, "-->", arrOfValidations)
      this.aliases.push(this.formBuilder.control(
        //TODO: form validity hampered because of first argument, works fine with ''
        { value: (this.viewEditStudent.aliases[index].toString()=='true'), disabled: this.viewOnly },
        //'',
        arrOfValidations));
    });
    console.log("Alisases->", this.aliases);
  }

  get aliases() {
    return this.registerForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log("form value", this.registerForm.value);
    if(this.edit)
      this.studentsService.update(this.registerForm.value);  
    else
      this.studentsService.create(this.registerForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this.registerForm.reset();
    //this.router.navigate([this.returnUrl]);
  }

  showMe(i:any, controls:any){
    debugger;
    console.log(i, controls);
  }

}
