import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { Task01Component } from './task01/task01.component';
import {ButtonModule} from 'primeng/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Task02Component } from './task02/task02.component';
import { Task02SearchComponent } from './task02/task02-search/task02-search.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmployeeService } from '../services/employee.service';
import { Task01WComponent } from './task01/task01-w/task01-w.component';
import { EmailValidateDirective } from '../directive/email-validate.directive';


@NgModule({
  declarations: [
    TaskComponent,
    Task01Component,
    Task02Component,
    Task02SearchComponent,
    EmpListComponent,
    EmpDetailComponent,
    Task01WComponent,
    EmailValidateDirective
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ButtonModule,
    MatButtonModule, 
    MatDialogModule, 
    FormsModule
  ],
  providers: [
    EmployeeService
  ]
})
export class TaskModule { }
