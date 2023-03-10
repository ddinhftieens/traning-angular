import { Component, OnInit } from '@angular/core';
import { Service01Service } from 'src/app/services/service01.service';

@Component({
  selector: 'app-module0201',
  templateUrl: './module0201.component.html',
  styleUrls: ['./module0201.component.css']
})
export class Module0201Component implements OnInit {

  constructor(
    private service: Service01Service
  ) { }

  ngOnInit(): void {
    console.log(this.service.getName());
    
  }

}
