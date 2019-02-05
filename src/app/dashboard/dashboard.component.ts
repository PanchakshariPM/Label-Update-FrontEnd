import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  result: any = [];
  conflicts: any = [];

  ngOnInit() {
    let headerPotion = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let search = new HttpParams();
    let headerOption = {
      headers: headerPotion
    }
    this.httpClient.get('http://localhost:4200/assets/folder_api.json', headerOption).subscribe(res => {
      console.log('data', res)
      this.result = res;
      this.conflicts = this.result.Conflicts;
      console.log("res", this.result);
    })
  }
}
