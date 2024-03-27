import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-alecturer',
  templateUrl: './add-alecturer.component.html',
  styleUrl: './add-alecturer.component.css'
})
export class AddALecturerComponent {
  public selectedFile;

  private http;

  public lecturers = {
    fullName:"",
    year:"",
    course:"",
    medium:"",
    limitOfStudent:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnAddClicked(){
    this.http.post("http://localhost:8080/addBatches",this.lecturers).subscribe((res)=>{
      alert("Batch added successfully");
    });
  }
}
