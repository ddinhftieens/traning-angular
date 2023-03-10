import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module0201Component } from './module0201/module0201.component';
import { Service01Service } from '../services/service01.service';



@NgModule({
  declarations: [
    Module0201Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Module0201Component
  ],
  providers: [
    Service01Service
  ]
})
export class Module02Module { }
