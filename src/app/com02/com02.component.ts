import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com02',
  // template: '<h1>Hello world !!!!!!</h1>',
  templateUrl: './com02.component.html',
  styleUrls: ['./com02.component.css']
  // styles: ['h1{color: red}']
})
export class Com02Component implements OnInit {

  // @Input("user") userName: string = ""
  @Input() user: string = ""
  @Output() userChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.userChange.emit(new Date().getTime())
  }

}
