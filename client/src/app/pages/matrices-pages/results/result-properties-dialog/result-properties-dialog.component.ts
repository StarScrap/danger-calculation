import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableOne } from 'src/app/interfaces/Tables';

@Component({
  selector: 'app-result-properties-dialog',
  templateUrl: './result-properties-dialog.component.html',
  styleUrls: ['./result-properties-dialog.component.scss']
})
export class ResultPropertiesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableOne[]) { }

  tableColumns: string[] = ['index', 'name'];
  tableSource: TableOne[] = this.data
}
