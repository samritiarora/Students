import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsFormRoutingModule } from './students-form-routing.module';
import { StudentRxFormComponent } from './student-rx-form/student-rx-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentRxFormComponent],
  imports: [
    CommonModule,
    StudentsFormRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class StudentsFormModule { }
