import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-loader',
  templateUrl: './table-loader.component.html',
  styleUrls: ['./table-loader.component.scss']
})
export class TableLoaderComponent implements OnInit {
  rows = new Array(15);
  cols = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}
