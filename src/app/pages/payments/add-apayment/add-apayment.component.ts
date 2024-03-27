import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-apayment',
  templateUrl: './add-apayment.component.html',
  styleUrl: './add-apayment.component.css'
})
export class AddAPaymentComponent {
  private http;

  public payments = {
    billId:"",
    studentId:"",
    studentName:"",
    batch:"",
    course:"",
    yearOfTheBatch:"",
    valueOfPayment:""
  }

  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }

  btnAddClicked(){
    this.http.post("http://localhost:8080/addPayments",this.payments).subscribe((res)=>{
      alert("Payment added successfully");
    });
  }
}
