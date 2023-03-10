import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module01RoutingModule } from './module01-routing.module';
import { Module0101Component } from './module0101/module0101.component';
import { Module0102Component } from './module0102/module0102.component';


@NgModule({
  declarations: [
    Module0101Component,
    Module0102Component
  ],
  imports: [
    CommonModule,
    Module01RoutingModule
  ]
})
export class Module01Module { }
