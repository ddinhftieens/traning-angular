import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-com05',
  templateUrl: './com05.component.html',
  styleUrls: ['./com05.component.css']
})
export class Com05Component implements OnInit, OnChanges {

  @Input('quantity') quantity: number = 0;

  constructor() { }

  ngOnChanges() {
    console.log("ngOnChanges by com 05");
  }

  ngOnInit(): void {
    console.log("ngOnInit by com 05");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit by com 05");
  }

}
