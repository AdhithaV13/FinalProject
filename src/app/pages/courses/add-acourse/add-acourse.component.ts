import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-acourse',
  templateUrl: './add-acourse.component.html',
  styleUrl: './add-acourse.component.css'
})
export class AddACourseComponent {
  private http;

  public courses = {
    courseId:"",
    courseName:"",
    periodOfTheCourse:"",
    lecturerName:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnAddClicked(){
    this.http.post("http://localhost:8080/addCourses",this.courses).subscribe((res)=>{
      alert("Course added successfully");
    });
  }
}
