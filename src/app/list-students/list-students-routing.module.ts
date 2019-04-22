import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListHomeComponent } from './student-list-home/student-list-home.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: StudentListHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ListStudentsRoutingModule { }
