import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.css']
})
export class LabelInfoComponent implements OnInit {

  folderDetails = [
    {
      no: 1, fileName: 'Label', type: 'Label for QC', owner: 'Mike Miller',
      size: '0.5Mb', dateModified: '30 Jan 2019', "conflictsNumber": "10", "Conflicts": [
        "formating and alignment",
        "contry Specific item",
        "Desc"
      ]
    },
    {
      no: 2, fileName: 'Description', type: 'Mapping Doc.', owner: 'David Bechham',
      size: '0.3Mb', dateModified: '30 Jan 2019', "conflictsNumber": "9",
      "Conflicts": [
        "formating and alignment",
        "contry Specific item",
        "Desc"
      ]
    },
    {
      no: 3, fileName: 'Content', type: 'Summary of Change', owner: 'Rudolf Shizam',
      size: '0.1Mb', dateModified: '30 Jan 2019', "conflictsNumber": "3",
      "Conflicts": [
        "formating and alignment",
        "contry Specific item",
        "Desc"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

