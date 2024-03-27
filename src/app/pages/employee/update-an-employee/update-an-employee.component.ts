import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-an-employee',
  templateUrl: './update-an-employee.component.html',
  styleUrl: './update-an-employee.component.css'
})
export class UpdateAnEmployeeComponent {
  private http;

  public employees = {
    employeeName:"",
    contactNumber:"",
    emailAddress:"",
    monthlySalary:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnUpdateClicked(){
    this.http.post("http://localhost:8080/updateEmployeeDetails",this.employees).subscribe((res)=>{
      alert("Employee updated successfully");
    });
  }
}
