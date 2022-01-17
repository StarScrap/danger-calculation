import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from 'src/app/interfaces/Result';
import { ResultsService } from 'src/app/shared/services/results.service';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent {

  clicked = false
  enterpriseName!: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Array<object>,
    private http: ResultsService
  ) { }


  tableColumns: string[] = ['index', 'name']
  tableSource: object[] = this.data


  postResult() {
    const result: Result = {
      enterpriseName: this.enterpriseName,
      resultsList: [this.data]
    }
    this.http.post(result).subscribe();
  }

  onSubmit(event: any) {
    event.target.disabled = true
  }

}
