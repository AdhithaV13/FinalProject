import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsPaneComponent } from './details-pane/details-pane.component';
import { AddABatchComponent } from './pages/batches/add-abatch/add-abatch.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAStudentComponent } from './pages/students/add-astudent/add-astudent.component';
import { AddAPaymentComponent } from './pages/payments/add-apayment/add-apayment.component';
import { AddACourseComponent } from './pages/courses/add-acourse/add-acourse.component';
import { AddAnEmployeeComponent } from './pages/employee/add-an-employee/add-an-employee.component';
import { ViewAllBatchesComponent } from './pages/batches/view-all-batches/view-all-batches.component';
import { AddALecturerComponent } from './pages/lecturers/add-alecturer/add-alecturer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsPaneComponent,
    AddABatchComponent,
    AddAStudentComponent,
    AddAPaymentComponent,
    AddACourseComponent,
    AddAnEmployeeComponent,
    ViewAllBatchesComponent,
    AddALecturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : 'addABatch',
        component : AddABatchComponent
      },
      {
        path : 'addAStudent',
        component : AddAStudentComponent
      },
      {
        path : 'addAPayment',
        component : AddAPaymentComponent
      },
      {
        path : 'addACourse',
        component : AddACourseComponent
      },
      {
        path : 'addAnEmployee',
        component : AddAnEmployeeComponent
      },
      {
        path : 'addALecturer',
        component : AddALecturerComponent
      },
      {
        path : 'viewAllBatches',
        component : ViewAllBatchesComponent
      }
    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
