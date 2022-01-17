import { Component, OnInit } from '@angular/core';
import { TableThree } from 'src/app/interfaces/Tables';

const TABLE_THREE: TableThree[] = [
  { index: '1', name: 'загрози, що порівнюються рівноцінні ' },
  { index: '3', name: 'одна загроза дещо переважає іншу' },
  { index: '5', name: 'одна загроза переважає іншу' },
  { index: '7', name: 'одна загроза значно переважає іншу' },
  { index: '9', name: 'одна загроза абсолютно переважає іншу' },
  { index: '2, 4, 6, 8', name: 'проміжні значення оцінювання загроз за важливістю' }
]

@Component({
  selector: 'app-table-three-dialog',
  templateUrl: './table-three-dialog.component.html',
  styleUrls: ['./table-three-dialog.component.scss']
})
export class TableThreeDialogComponent {

  tableColumns: string[] = ['index', 'name']
  tableSource: object[] = TABLE_THREE

}
