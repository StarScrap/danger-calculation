import { Component, OnInit } from '@angular/core';
import { TableTwo } from 'src/app/interfaces/Tables';

const TABLE_TWO: TableTwo[] = [
  { index: 'R1', name: 'загроза трапляється нечасто і нерегулярно' },
  { index: 'R2', name: 'поява загрози час від часу' },
  { index: 'R3', name: 'загроза трапляється часто і регулярно упродовж певного періоду часу' },
]

@Component({
  selector: 'app-table-two-dialog',
  templateUrl: './table-two-dialog.component.html',
  styleUrls: ['./table-two-dialog.component.scss']
})
export class TableTwoDialogComponent {

  tableColumns: string[] = ['index', 'name']
  tableSource: object[] = TABLE_TWO

}
