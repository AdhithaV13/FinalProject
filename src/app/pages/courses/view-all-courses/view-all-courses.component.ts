import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrl: './view-all-courses.component.css'
})
export class ViewAllCoursesComponent {
  private http;
  public courseList:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadCourseInfo();
  }

  loadCourseInfo() {
    this.http.get("http://localhost:8080/showAllCourses")
      .subscribe(data => {
        this.courseList = data;
      })
  }
}
