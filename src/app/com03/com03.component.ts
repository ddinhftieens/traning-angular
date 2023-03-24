import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Com06Component } from '../com06/com06.component';

@Component({
  selector: 'app-com03',
  templateUrl: './com03.component.html',
  styleUrls: ['./com03.component.css']
})
export class Com03Component implements OnInit {

  show: boolean = false;

  @ViewChild('myAppCom06') myAppCom06: Com06Component = new Com06Component();

  @ViewChildren(Com06Component) listCom06: QueryList<Com06Component> = new QueryList()

  gender: string = 'MF'

  list: any[] = [
    {id: 1, name: 'A', age: 10},
    {id: 2, name: 'B', age: 20},
    {id: 3, name: 'C', age: 30},
    {id: 4, name: 'D', age: 40},
    {id: 5, name: 'E', age: 50},
    {id: 6, name: 'F', age: 60}
  ]

  quantity: number = 0

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit by com 03");
    console.log(this.myAppCom06.title);
    console.log(this.myAppCom06.getTitle());
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit by com 03");
  }

  setQuantity() {
    this.quantity = new Date().getTime();
  }

  logTemplateRef(inputTem: any) {
    console.log(inputTem.value);
    console.log(document.getElementById("myInputId"));
    
  }

  setTitle() {
    this.myAppCom06.title = new Date().getTime() + ""
  }

  getKeySearch() {
    console.log(this.myAppCom06.keySearch);
  }

  getKeySearchList() {
    this.listCom06.forEach((e: Com06Component) => {
      console.log(e.keySearch);
    })
  }

}
