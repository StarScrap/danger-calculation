import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { TableFiveComponent } from './table-five/table-five.component';
import { TableFourComponent } from './table-four/table-four.component';
import { TableSevenComponent } from './table-seven/table-seven.component';
import { TableSixComponent } from './table-six/table-six.component';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../results/result-dialog/result-dialog.component';
import { TABLE_ONE } from '../dialog-tables/table-one-dialog/table-one-dialog.component';



@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class MatricesComponent {

  @ViewChild(TableFourComponent) tableFour!: TableFourComponent;
  @ViewChild(TableFiveComponent) tableFive!: TableFiveComponent;
  @ViewChild(TableSixComponent) tableSix!: TableSixComponent;
  @ViewChild(TableSevenComponent) tableSeven!: TableSevenComponent;

  constructor(private dialog: MatDialog) { }


  matrixGenerator() {
    let matrix: number[][] = Array(15).fill(null).map(() => Array(15).fill(0));
    return matrix
  }

  arrayGenerator() {
    let array: number[] = Array(15).fill(null);
    return array
  }

  getMatrices() {
    let w = this.tableFour.priorityVectors()
    let R1 = this.tableFive.createMatrixFive()
    let R2 = this.tableSix.createMatrixSix()
    let R3 = this.tableSeven.createMatrixSeven()
    return { w, R1, R2, R3 }
  }

  createAppendixOne() {
    let matrices: any = this.getMatrices()
    let R1: number[][] = matrices.R1
    let R2: number[][] = matrices.R2
    let R3: number[][] = matrices.R3
    let appendixOne: number[][] = this.matrixGenerator()

    for (let i: number = 0; i < appendixOne.length; i++) {
      for (let j: number = 0; j < appendixOne[i].length; j++) {
        let formula_6: number = R1[i][j] * R2[i][j] * R3[i][j]
        appendixOne[i][j] = formula_6
      }
    }
    return appendixOne
  }

  createAppendixTwo() {
    let appendixOne: number[][] = this.createAppendixOne()
    let appendixTwo: number[][] = this.matrixGenerator()
    for (let i: number = 0; i < appendixTwo.length; i++) {
      for (let j: number = 0; j < appendixTwo[i].length; j++) {
        let formula_7: number = appendixOne[i][j] - appendixOne[j][i]
        if (formula_7 > 0) {
          appendixTwo[i][j] = formula_7
        } else {
          appendixTwo[i][j] = 0
        }
      }
    }
    return appendixTwo
  }

  createAppendixThree() {
    let matrices: any = this.getMatrices()
    let w: number[] = matrices.w
    let w1: number = w[0];
    let w2: number = w[1];
    let w3: number = w[2];
    let R1: number[][] = matrices.R1
    let R2: number[][] = matrices.R2
    let R3: number[][] = matrices.R3
    let appendixThree: number[][] = this.matrixGenerator()

    for (let i: number = 0; i < appendixThree.length; i++) {
      for (let j: number = 0; j < appendixThree[i].length; j++) {
        let formula_9: number = (R1[i][j] * w1) + (R2[i][j] * w2) + (R3[i][j] * w3)
        appendixThree[i][j] = formula_9
      }
    }
    return appendixThree
  }

  createAppendixFour() {
    let appendixThree: number[][] = this.createAppendixThree()
    let appendixFour: number[][] = this.matrixGenerator()
    for (let i: number = 0; i < appendixFour.length; i++) {
      for (let j: number = 0; j < appendixFour[i].length; j++) {
        let formula_7: number = appendixThree[i][j] - appendixThree[j][i]
        if (formula_7 > 0) {
          appendixFour[i][j] = formula_7
        } else {
          appendixFour[i][j] = 0
        }
      }
    }
    return appendixFour
  }

  alternativeOne() {
    let appendixTwo: number[][] = this.createAppendixTwo()
    let alternativeOne: number[] = this.arrayGenerator()
    for (let i: number = 0; i < appendixTwo.length; i++) {
      for (let j: number = 0; j < appendixTwo[i].length; j++) {
        let formula_8: number = appendixTwo[j][i]
        if (formula_8 === 1) {
          alternativeOne[i] = 0
          continue;
        }
      }
      let cel = alternativeOne[i]
      if (cel === null) {
        alternativeOne[i] = 1
      }
    }
    console.table(alternativeOne)
    return alternativeOne
  }

  alternativeTwo() {
    let appendixFour: number[][] = this.createAppendixFour()
    let alternativeTwo: number[] = this.arrayGenerator()
    let values: number[] = this.arrayGenerator()
    let max: number
    for (let i: number = 0; i < appendixFour.length; i++) {
      for (let j: number = 0; j < appendixFour[i].length; j++) {
        let formula_11: number = appendixFour[j][i]
        values[j] = formula_11
      }
      max = Math.max.apply(Math, values);
      alternativeTwo[i] = 1 - max
    }
    console.table(alternativeTwo)
    return alternativeTwo
  }

  findAlternative() {
    let alternativeOne: number[] = this.alternativeOne()
    let alternativeTwo: number[] = this.alternativeTwo()
    let alternative: number[] = this.arrayGenerator()
    let min: number
    for (let i: number = 0; i < alternative.length; i++) {
      let formula_12: number[] = [alternativeOne[i], alternativeTwo[i]]
      min = Math.min.apply(Math, formula_12);
      alternative[i] = min
    }
    console.table(alternative)
    return alternative
  }

  findDangers() {
    let alternative: number[] = this.findAlternative()
    let threatsList: any[] = Array().fill(null);
    let dangers: any[] = Array().fill(null);
    for (let i: number = 0; i < alternative.length; i++) {
      if (alternative[i] > 0) {
        dangers[i] = TABLE_ONE[i]
      }
    }
    threatsList = dangers.filter(function () { return true });
    console.log(threatsList)
    return threatsList
  }

  openResultDialog() {
    let threatesList = this.findDangers()
    this.dialog.open(ResultDialogComponent, {
      data: threatesList
    })
  }

}



