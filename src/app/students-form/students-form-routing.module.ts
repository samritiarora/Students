import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRxFormComponent } from './student-rx-form/student-rx-form.component';
import { StudentsResolver } from './student.resolver';
import { DocumentsResolver } from './document.resolver';
import { AuthGuard } from '../login/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: StudentRxFormComponent,
    resolve: {
      studentsList: StudentsResolver,
      documentsList: DocumentsResolver
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [StudentsResolver, DocumentsResolver, AuthGuard]
})
export class StudentsFormRoutingModule { }
