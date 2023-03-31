import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task01-w',
  templateUrl: './task01-w.component.html',
  styleUrls: ['./task01-w.component.css']
})
export class Task01WComponent implements OnInit {

  model: Model = new Model();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.model);
    // validate -> name required
    // validate email

    // if(validate) {

    //   return;
    // }

    // save 
    // call service

  }

}

export class Model {
  name: string = ""
  email: string = ""
}
