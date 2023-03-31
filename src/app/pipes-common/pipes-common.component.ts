import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-common',
  templateUrl: './pipes-common.component.html',
  styleUrls: ['./pipes-common.component.css']
})
export class PipesCommonComponent implements OnInit {

  title: string = "Hello world"
  date: Date = new Date();

  money: number = 1.125

  constructor() { }

  ngOnInit(): void {
  }

}
