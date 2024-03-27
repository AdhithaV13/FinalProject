import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-an-employee',
  templateUrl: './add-an-employee.component.html',
  styleUrl: './add-an-employee.component.css'
})
export class AddAnEmployeeComponent {
  private http;

  public employee = {
    employeeName:"",
    contactNumber:"",
    emailAddress:"",
    monthlySalary:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnAddClicked(){
    this.http.post("http://localhost:8080/addEmployee",this.employee).subscribe((res)=>{
      alert("Employee added successfully");
    });
  }
}
