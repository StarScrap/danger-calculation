import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-four',
  templateUrl: './table-four.component.html',
  styleUrls: ['./table-four.component.scss']
})
export class TableFourComponent implements OnInit {

  r1_1: any = 1; r1_2: any; r1_3: any;
  r2_1: any; r2_2: any = 1; r2_3: any;
  r3_1: any; r3_2: any; r3_3: any = 1;


  createMatrix() {
    let matrixFour: any[][] = Array(3).fill(null).map(() => Array(3).fill(0));
    matrixFour[0][0] = eval(this.r1_1); matrixFour[0][1] = eval(this.r1_2); matrixFour[0][2] = eval(this.r1_3);
    matrixFour[1][0] = eval(this.r2_1); matrixFour[1][1] = eval(this.r2_2); matrixFour[1][2] = eval(this.r2_3);
    matrixFour[2][0] = eval(this.r3_1); matrixFour[2][1] = eval(this.r3_2); matrixFour[2][2] = eval(this.r3_3);
    console.table(matrixFour)
    return matrixFour
  }

  mainOwnVectors() {
    let matrixFour = this.createMatrix()
    let v1: number = Math.pow(matrixFour[0][0] * matrixFour[0][1] * matrixFour[0][2], 1 / 3)
    let v2: number = Math.pow(matrixFour[1][0] * matrixFour[1][1] * matrixFour[1][2], 1 / 3)
    let v3: number = Math.pow(matrixFour[2][0] * matrixFour[2][1] * matrixFour[2][2], 1 / 3)
    let main_own_vectors: number[] = [v1, v2, v3]
    console.table(main_own_vectors)
    return main_own_vectors
  }

  priorityVectors() {
    let main_own_vectors = this.mainOwnVectors()
    let vectors_sum: number = (main_own_vectors[0] + main_own_vectors[1] + main_own_vectors[2])
    let w1: number = (main_own_vectors[0] / vectors_sum)
    let w2: number = (main_own_vectors[1] / vectors_sum)
    let w3: number = (main_own_vectors[2] / vectors_sum)
    let priority_vectors: number[] = [w1, w2, w3]
    console.table(priority_vectors)
    return priority_vectors
  }


  constructor() { }

  ngOnInit(): void {
  }

}
