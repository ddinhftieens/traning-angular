import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com06',
  templateUrl: './com06.component.html',
  styleUrls: ['./com06.component.css']
})
export class Com06Component implements OnInit {

  title: string = "Hello world by com06"

  keySearch: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return "Welcom to Viet nam"
  }

}
