import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com01Component } from './com01/com01.component';
import { Com02Component } from './com02/com02.component';
import { AuthGuard } from './gurads/auth.guard';
import { RoleGuard } from './gurads/role.guard';
import { Module02Module } from './module02/module02.module';

@NgModule({
  declarations: [
    AppComponent,
    Com01Component,
    Com02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module02Module,
    FormsModule
  ],
  providers: [
    RoleGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
