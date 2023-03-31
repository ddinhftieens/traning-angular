import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com01Component } from './com01/com01.component';
import { Com02Component } from './com02/com02.component';
import { AuthGuard } from './gurads/auth.guard';
import { RoleGuard } from './gurads/role.guard';
import { Module02Module } from './module02/module02.module';
import { Com03Component } from './com03/com03.component';
import { Com04Component } from './com04/com04.component';
import { DirecCusDirective } from './directive/direc-cus.directive';
import { Com05Component } from './com05/com05.component';
import { Com06Component } from './com06/com06.component';
import { PipesCommonComponent } from './pipes-common/pipes-common.component';
import { PipeCusPipe } from './pipes/pipe-cus.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Com01Component,
    Com02Component,
    Com03Component,
    Com04Component,
    DirecCusDirective,
    Com05Component,
    Com06Component,
    PipesCommonComponent,
    PipeCusPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module02Module,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    RoleGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
