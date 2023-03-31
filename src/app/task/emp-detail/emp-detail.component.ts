import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  title: string = ""
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.title = this.employeeService.getTilte();
  }

}
