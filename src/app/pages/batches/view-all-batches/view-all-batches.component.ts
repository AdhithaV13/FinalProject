import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-batches',
  templateUrl: './view-all-batches.component.html',
  styleUrl: './view-all-batches.component.css'
})

export class ViewAllBatchesComponent implements OnInit{
  private http;
  public batchList:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadBatchInfo();
  }

  loadBatchInfo() {
    this.http.get("http://localhost:8080/showAllBatches")
      .subscribe(data => {
        this.batchList = data;
      })
  }
}
