import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStudentsRoutingModule } from './list-students-routing.module';
import { StudentListHomeComponent } from './student-list-home/student-list-home.component';
import { StudentListDetailComponent } from './student-list-detail/student-list-detail.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [StudentListHomeComponent, StudentListDetailComponent, StudentSearchComponent],
  imports: [
    CommonModule,
    ListStudentsRoutingModule
  ]
})
export class ListStudentsModule { }
