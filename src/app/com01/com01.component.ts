import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com01',
  templateUrl: './com01.component.html',
  styleUrls: ['./com01.component.css']
})
export class Com01Component implements OnInit {

  name: string = "Hello world"

  path: string = ""

  token: string = ""

  myId: string = "input1"

  inputDisabled: boolean = false

  classStringSuccess: string = "success"
  classStringError: string = "error"
  classStringTextItalic: string = "text-italic"

  classObj = {
    "success": false,
    "text-italic": true
  }

  classArray = [
    "error", "text-italic"
  ]

  title: string = "123"

  userName: string = "hello world"

  constructor() { }

  ngOnInit(): void {
    this.name = "Welcome to Viet Nam"
    // console.log(window.location.pathname);
    // this.path = window.location.pathname

    // localStorage.setItem("token", "123456789")
    // console.log(localStorage.getItem("token"));

    this.token = localStorage.getItem("token") || ""
  }

  getName() {
    return "Welcome to Viet Nam"
  }

  btnClick(event: any) {
    // console.log("Welcome to Viet Nam");
    console.log(event);
  }

  btnClick2() {
    console.log(new Date().getTime())
  }

  userChange(event: number) {
      console.log(event);
      
  }

}
