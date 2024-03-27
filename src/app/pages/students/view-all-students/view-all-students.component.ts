import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-students',
  templateUrl: './view-all-students.component.html',
  styleUrl: './view-all-students.component.css'
})
export class ViewAllStudentsComponent {
  private http;
  public studentList:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadStudentInfo();
  }

  loadStudentInfo() {
    this.http.get("http://localhost:8080/showAllStudents")
      .subscribe(data => {
        this.studentList = data;
      })
  }
}
