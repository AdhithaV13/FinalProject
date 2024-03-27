import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-list-of-payments',
  templateUrl: './view-list-of-payments.component.html',
  styleUrl: './view-list-of-payments.component.css'
})
export class ViewListOfPaymentsComponent {
  private http;
  public paymentList:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadPaymentInfo();
  }

  loadPaymentInfo() {
    this.http.get("http://localhost:8080/showAllPayments")
      .subscribe(data => {
        this.paymentList = data;
      })
  }
}
