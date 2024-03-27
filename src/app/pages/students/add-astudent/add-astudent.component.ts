import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-astudent',
  templateUrl: './add-astudent.component.html',
  styleUrl: './add-astudent.component.css'
})
export class AddAStudentComponent {
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

  btnAddClicked(){
    this.http.post("http://localhost:8080/addStudents",this.students).subscribe((res)=>{
      alert("Student added successfully");
    });
  }
}
