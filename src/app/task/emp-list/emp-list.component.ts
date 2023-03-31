import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { lastValueFrom } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  title: string = ""
  search = {
    name: "Hello",
    categoryId: 1
  }
  constructor(
    private employeeService: EmployeeService
  ) { }

  async ngOnInit() {
    this.title = this.employeeService.getTilte();
    // const token = "asdfdiahfakjbdsaweasdf";
    // Cookie.set("token", token);
    console.log("1");
    
    // this.employeeService.getData(this.search).subscribe(
    //   {
    //    next: resp => {
    //     console.log("2");
    //     // const token = resp['acess_token'];
    //     //   Cookie.set("token", "yeheeyehesusuusus")
    //    } , 
    //    error: (error) => {
    //       console.log(error);
          
    //    }
    //   }
    // )

    await lastValueFrom(this.employeeService.getData(this.search)).then(
      resp => {
        console.log(2);
      }
    ).catch(error => {

    })

    console.log("3");

  }

  btnClickLogin() {
    this.employeeService.login({userName: "", passWord: ""}).subscribe({
      next: resp => {
        
        const token = resp['acess_token'];
          Cookie.set("token", "yeheeyehesusuusus")
      },
      error: resp => {

      }
    })
  }

}
