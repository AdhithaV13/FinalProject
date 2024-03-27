import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent {
  private http;
  public employeeList:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadEmployeeInfo();
  }

  loadEmployeeInfo() {
    this.http.get("http://localhost:8080/showAllEmployees")
      .subscribe(data => {
        this.employeeList = data;
      })
  }
}
