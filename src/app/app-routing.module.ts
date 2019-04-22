import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsResolver } from './students-form/student.resolver';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  {
    path: 'studentsList',
    loadChildren: './list-students/list-students.module#ListStudentsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'studentsForm',
    loadChildren: './students-form/students-form.module#StudentsFormModule',
    canActivate: [AuthGuard]
    // resolve: {
    //   studentsList: StudentsResolver
    // }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '',
    canActivate: [AuthGuard], 
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StudentsResolver, AuthGuard]
})
export class AppRoutingModule { }
