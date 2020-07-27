import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryToDoService } from './core/to-do-list/in-memory-to-do.service';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './core/to-do-list/to-do-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryToDoService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
