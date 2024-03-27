import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-abatch',
  templateUrl: './add-abatch.component.html',
  styleUrl: './add-abatch.component.css'
})
export class AddABatchComponent {
  private http;

  public batches = {
    batchName:"",
    year:"",
    course:"",
    medium:"",
    limitOfStudent:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnAddClicked(){
    this.http.post("http://localhost:8080/addBatches",this.batches).subscribe((res)=>{
      alert("Batch added successfully");
    });
  }
}
