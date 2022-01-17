import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Result } from 'src/app/interfaces/Result';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ResultsService } from 'src/app/shared/services/results.service';
import { ResultPropertiesDialogComponent } from './result-properties-dialog/result-properties-dialog.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  result!: any
  results!: Result[]
  resultList!: any

  constructor(
    private http: ResultsService,
    private dialog: MatDialog
  ) { }

  //  Get all results
  ngOnInit() {
    this.http.get().subscribe(
      (data) => {
        this.results = data
        console.log(this.results)
      })
  }

  // Get result by id
  getResult(id: any, list: any) {
    this.http.getById(id).subscribe(
      (data) => {
        this.result = data
      }
    )
    this.resultList = list
    console.log(this.resultList)
  }

  // Delate result
  deleteResult(id: any, name: any) {
    const decicion = window
      .confirm(`Ви впевнені що хочете видалити рузультати аудиту: ${name}`)
    if (decicion) {
      this.http.delete(id)
        .subscribe()
      window.location.reload()
    }
  }

  // Open resalts dialog window
  openResultsPropertiDeteils() {
    this.dialog.open(ResultPropertiesDialogComponent, {
      data: this.resultList
    })
  }


}


