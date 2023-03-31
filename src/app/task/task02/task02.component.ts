import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task02',
  templateUrl: './task02.component.html',
  styleUrls: ['./task02.component.css']
})
export class Task02Component implements OnInit {

  listItems = [
    {id: 1, name: "Tien", address: "HN", gender: 1},
    {id: 2, name: "Nam", address: "HN", gender: 0},
    {id: 3, name: "Toan", address: "HN", gender: 1},
    {id: 4, name: "Long", address: "HN", gender: 0},
    {id: 5, name: "Trung", address: "HN", gender: 1},
    {id: 6, name: "Duy", address: "HN", gender: 2}
  ]

  list: any[] = []

  ngOnInit(): void {
    this.list = this.listItems
  }

  convertGender(gender: number) {
    switch(gender) {
      case 0: return "Famle"
      case 1: return "Male"
      default: return "Other"
    }
  }

  btnClick(name: string) {
    if(name == null) {
      this.list = this.listItems
    } else {
      this.list = this.listItems.filter(element => {
        return element.name.toLowerCase().includes(name.trim().toLowerCase())
      })
    }
  }

}
