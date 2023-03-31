import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

const routes: Routes = [
  {path: "task01", component: Task01Component},
  {path: "task02", component: Task02Component},
  {path: "emp-list", component: EmpListComponent},
  {path: "emp-detail", component: EmpDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
