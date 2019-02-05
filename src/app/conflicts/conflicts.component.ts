import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-conflicts',
  templateUrl: './conflicts.component.html',
  styleUrls: ['./conflicts.component.css'],

  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ConflictsComponent implements OnInit {

  displayedColumns: string[] = ['noOfConflicts', 'conflicts', 'recommendations'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  result: any = [];
  conflict_formatting: any = [];
  conflict_content: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    let headerPotion = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let search = new HttpParams();
    let headerOption = {
      headers: headerPotion
    }
    this.http.get('http://localhost:4200/assets/conflicts_api.json', headerOption).subscribe(res => {
      console.log('data', res)
      this.result = res;
      this.conflict_content = this.result.conflict_content;
      this.conflict_formatting = this.result.conflict_formatting
      console.log("res", this.result);
    })


  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface PeriodicElement {
  // labels: any;
  noOfConflicts: any;
  conflicts: any;
  recommendations: any;
  // labelConflicts: any;
  conflictConflicts: any;
  recommendationConflicts: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    noOfConflicts: 3, conflicts: 'Formatting and Alignment',
    recommendations: 'Formatting and Alignment',
    conflictConflicts: 'Font:Times New Roman, Font-Size: 10pt, Color:#0333',
    recommendationConflicts: 'Font: Ariel, Font-Size: 9pt, Color:#0323'
  },
  {
    noOfConflicts: 2, conflicts: 'Content Mismatch',
    recommendations: 'Content Mismatch',
    conflictConflicts: 'Font:Times New Roman, Color:#0333',
    recommendationConflicts: 'Font: Ariel, Color:#0323'
  },
  {
    noOfConflicts: 2, conflicts: 'Content',
    recommendations: 'Content',
    conflictConflicts: ' Font-Size: 10pt, Color:#0333',
    recommendationConflicts: 'Font-Size: 9pt, Color:#0323'
  }

];

