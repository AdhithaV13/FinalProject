import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-course-details',
  templateUrl: './update-course-details.component.html',
  styleUrl: './update-course-details.component.css'
})
export class UpdateCourseDetailsComponent {
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

  btnUpdateClicked(){
    this.http.post("http://localhost:8080/updateCourseDetails",this.courses).subscribe((res)=>{
      alert("Course updated successfully");
    });
  }
}
