import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task02-search',
  templateUrl: './task02-search.component.html',
  styleUrls: ['./task02-search.component.css']
})
export class Task02SearchComponent implements OnInit {

  name: string = ""

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnSearch() {
    this.btnClick.emit(this.name)
  }

  btnReset() {
    this.name = "";
    this.btnClick.emit(null)
  }

}
