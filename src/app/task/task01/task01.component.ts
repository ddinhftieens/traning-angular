import { Component, OnInit } from '@angular/core';
import { Task01WComponent } from './task01-w/task01-w.component';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {

  model = {
    name: "",
    address: "",
    email: ""
  }

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showDialog() {
    const dialogRef = this.dialog.open(Task01WComponent, {
      width: '1200px',
      height: '85%',
      maxWidth: '90vw',
      // disableClose: true,
      data: {

      }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    });
  }

  onSave(form: NgForm) {

    console.log(form);


    console.log(form.invalid);
    console.log(form.valid);
    console.log(form.controls);

    console.log(form.controls['name'].value);
    console.log(form.controls['name'].invalid);


    if (form.invalid) {
      if (form.controls) {
        let keys = Object.keys(form.controls);
        // console.log(keys);

        keys.forEach((key) => {
          form.controls[key].markAllAsTouched();
        });
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i]
          if (form.controls[key].invalid) {
            document.getElementsByName(key)[0].focus()
            return;
          }
        }
      }
    } else {
      // service call api
      console.log(this.model);
      
    }



  }

}
