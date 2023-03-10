import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module0101Component } from './module0101/module0101.component';
import { Module0102Component } from './module0102/module0102.component';

const routes: Routes = [
  {
    path: "", component: Module0101Component,
    children: [
      {
        path: "module0102", component: Module0102Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module01RoutingModule { }
