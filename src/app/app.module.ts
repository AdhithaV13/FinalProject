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
import { UpdateStudentDetailsComponent } from './pages/students/update-student-details/update-student-details.component';
import { UpdateCourseDetailsComponent } from './pages/courses/update-course-details/update-course-details.component';
import { UpdateAnEmployeeComponent } from './pages/employee/update-an-employee/update-an-employee.component';
import { AboutTheInstituteComponent } from './pages/about-the-institute/about-the-institute.component';
import { ViewAllStudentsComponent } from './pages/students/view-all-students/view-all-students.component';
import { ViewListOfPaymentsComponent } from './pages/payments/view-list-of-payments/view-list-of-payments.component';
import { ViewAllCoursesComponent } from './pages/courses/view-all-courses/view-all-courses.component';
import { ViewAllEmployeesComponent } from './pages/employee/view-all-employees/view-all-employees.component';

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
    AddALecturerComponent,
    UpdateStudentDetailsComponent,
    UpdateCourseDetailsComponent,
    UpdateAnEmployeeComponent,
    AboutTheInstituteComponent,
    ViewAllStudentsComponent,
    ViewListOfPaymentsComponent,
    ViewAllCoursesComponent,
    ViewAllEmployeesComponent
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
      },
      {
        path : 'updateStudentDetails',
        component : UpdateStudentDetailsComponent
      },
      {
        path : 'updateCourseDetails',
        component : UpdateCourseDetailsComponent
      },
      {
        path : 'updateAnEmployee',
        component : UpdateAnEmployeeComponent
      },
      {
        path : 'aboutTheInstitute',
        component : AboutTheInstituteComponent
      },
      {
        path : 'viewAllStudents',
        component : ViewAllStudentsComponent
      },
      {
        path : 'viewAllPayments',
        component : ViewListOfPaymentsComponent
      },
      {
        path : 'viewAllCourses',
        component : ViewAllCoursesComponent
      },
      {
        path : 'viewAllEmployees',
        component : ViewAllEmployeesComponent
      }
    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
