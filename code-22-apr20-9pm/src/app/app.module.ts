import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmpComponent } from './emp/emp.component';
import { Test } from './test';
import { ChildComponent } from './child/child.component';
import { ChildofchildComponent } from './childofchild/childofchild.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MessageService } from './message.service';
import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmpComponent,
    ChildComponent,
    ChildofchildComponent,
    FacultyComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Test,MessageService,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
