import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-student-details',
  templateUrl: './update-student-details.component.html',
  styleUrl: './update-student-details.component.css'
})
export class UpdateStudentDetailsComponent {
  private http;

  public students = {
    studentId:"",
    studentName:"",
    batchName:"",
    course:"",
    medium:"",
    emailAddress:"",
    contactNumber:"",
    dateOfBirth:"",
    payedOrNot:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnUpdateClicked(){
    this.http.post("http://localhost:8080/updateStudentDetails",this.students).subscribe((res)=>{
      alert("Student updated successfully");
    });
  }
}
