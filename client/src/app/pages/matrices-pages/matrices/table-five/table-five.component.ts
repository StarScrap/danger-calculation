import { Component } from '@angular/core';

@Component({
  selector: 'app-table-five',
  templateUrl: './table-five.component.html',
  styleUrls: ['./table-five.component.scss']
})
export class TableFiveComponent {

  x1_1: string = '1'; x1_2!: string; x1_3!: string; x1_4!: string; x1_5!: string; x1_6!: string; x1_7!: string; x1_8!: string; x1_9!: string; x1_10!: string; x1_11!: string; x1_12!: string; x1_13!: string; x1_14!: string; x1_15!: string;
  x2_1!: string; x2_2: string = '1'; x2_3!: string; x2_4!: string; x2_5!: string; x2_6!: string; x2_7!: string; x2_8!: string; x2_9!: string; x2_10!: string; x2_11!: string; x2_12!: string; x2_13!: string; x2_14!: string; x2_15!: string;
  x3_1!: string; x3_2!: string; x3_3: string = '1'; x3_4!: string; x3_5!: string; x3_6!: string; x3_7!: string; x3_8!: string; x3_9!: string; x3_10!: string; x3_11!: string; x3_12!: string; x3_13!: string; x3_14!: string; x3_15!: string;
  x4_1!: string; x4_2!: string; x4_3!: string; x4_4: string = '1'; x4_5!: string; x4_6!: string; x4_7!: string; x4_8!: string; x4_9!: string; x4_10!: string; x4_11!: string; x4_12!: string; x4_13!: string; x4_14!: string; x4_15!: string;
  x5_1!: string; x5_2!: string; x5_3!: string; x5_4!: string; x5_5: string = '1'; x5_6!: string; x5_7!: string; x5_8!: string; x5_9!: string; x5_10!: string; x5_11!: string; x5_12!: string; x5_13!: string; x5_14!: string; x5_15!: string;
  x6_1!: string; x6_2!: string; x6_3!: string; x6_4!: string; x6_5!: string; x6_6: string = '1'; x6_7!: string; x6_8!: string; x6_9!: string; x6_10!: string; x6_11!: string; x6_12!: string; x6_13!: string; x6_14!: string; x6_15!: string;
  x7_1!: string; x7_2!: string; x7_3!: string; x7_4!: string; x7_5!: string; x7_6!: string; x7_7: string = '1'; x7_8!: string; x7_9!: string; x7_10!: string; x7_11!: string; x7_12!: string; x7_13!: string; x7_14!: string; x7_15!: string;
  x8_1!: string; x8_2!: string; x8_3!: string; x8_4!: string; x8_5!: string; x8_6!: string; x8_7!: string; x8_8: string = '1'; x8_9!: string; x8_10!: string; x8_11!: string; x8_12!: string; x8_13!: string; x8_14!: string; x8_15!: string;
  x9_1!: string; x9_2!: string; x9_3!: string; x9_4!: string; x9_5!: string; x9_6!: string; x9_7!: string; x9_8!: string; x9_9: string = '1'; x9_10!: string; x9_11!: string; x9_12!: string; x9_13!: string; x9_14!: string; x9_15!: string;
  x10_1!: string; x10_2!: string; x10_3!: string; x10_4!: string; x10_5!: string; x10_6!: string; x10_7!: string; x10_8!: string; x10_9!: string; x10_10: string = '1'; x10_11!: string; x10_12!: string; x10_13!: string; x10_14!: string; x10_15!: string;
  x11_1!: string; x11_2!: string; x11_3!: string; x11_4!: string; x11_5!: string; x11_6!: string; x11_7!: string; x11_8!: string; x11_9!: string; x11_10!: string; x11_11: string = '1'; x11_12!: string; x11_13!: string; x11_14!: string; x11_15!: string;
  x12_1!: string; x12_2!: string; x12_3!: string; x12_4!: string; x12_5!: string; x12_6!: string; x12_7!: string; x12_8!: string; x12_9!: string; x12_10!: string; x12_11!: string; x12_12: string = '1'; x12_13!: string; x12_14!: string; x12_15!: string;
  x13_1!: string; x13_2!: string; x13_3!: string; x13_4!: string; x13_5!: string; x13_6!: string; x13_7!: string; x13_8!: string; x13_9!: string; x13_10!: string; x13_11!: string; x13_12!: string; x13_13: string = '1'; x13_14!: string; x13_15!: string;
  x14_1!: string; x14_2!: string; x14_3!: string; x14_4!: string; x14_5!: string; x14_6!: string; x14_7!: string; x14_8!: string; x14_9!: string; x14_10!: string; x14_11!: string; x14_12!: string; x14_13!: string; x14_14: string = '1'; x14_15!: string;
  x15_1!: string; x15_2!: string; x15_3!: string; x15_4!: string; x15_5!: string; x15_6!: string; x15_7!: string; x15_8!: string; x15_9!: string; x15_10!: string; x15_11!: string; x15_12!: string; x15_13!: string; x15_14!: string; x15_15: string = '1';


  createMatrixFive() {
    let matrixFive = Array(15).fill(null).map(() => Array(15).fill(0));
    matrixFive[0][0] = eval(this.x1_1); matrixFive[0][1] = eval(this.x1_2); matrixFive[0][2] = eval(this.x1_3); matrixFive[0][3] = eval(this.x1_4); matrixFive[0][4] = eval(this.x1_5);
    matrixFive[0][5] = eval(this.x1_6); matrixFive[0][6] = eval(this.x1_7); matrixFive[0][7] = eval(this.x1_8); matrixFive[0][8] = eval(this.x1_9); matrixFive[0][9] = eval(this.x1_10);
    matrixFive[0][10] = eval(this.x1_11); matrixFive[0][11] = eval(this.x1_12); matrixFive[0][12] = eval(this.x1_13); matrixFive[0][13] = eval(this.x1_14); matrixFive[0][14] = eval(this.x1_15);

    matrixFive[1][0] = eval(this.x2_1); matrixFive[1][1] = eval(this.x2_2); matrixFive[1][2] = eval(this.x2_3); matrixFive[1][3] = eval(this.x2_4); matrixFive[1][4] = eval(this.x2_5);
    matrixFive[1][5] = eval(this.x2_6); matrixFive[1][6] = eval(this.x2_7); matrixFive[1][7] = eval(this.x2_8); matrixFive[1][8] = eval(this.x2_9); matrixFive[1][9] = eval(this.x2_11);
    matrixFive[1][10] = eval(this.x2_11); matrixFive[1][11] = eval(this.x2_12); matrixFive[1][12] = eval(this.x2_13); matrixFive[1][13] = eval(this.x2_14); matrixFive[1][14] = eval(this.x2_15);

    matrixFive[2][0] = eval(this.x3_1); matrixFive[2][1] = eval(this.x3_2); matrixFive[2][2] = eval(this.x3_3); matrixFive[2][3] = eval(this.x3_4); matrixFive[2][4] = eval(this.x3_5);
    matrixFive[2][5] = eval(this.x3_2); matrixFive[2][6] = eval(this.x3_7); matrixFive[2][7] = eval(this.x3_8); matrixFive[2][8] = eval(this.x3_9); matrixFive[2][9] = eval(this.x3_10);
    matrixFive[2][10] = eval(this.x3_11); matrixFive[2][11] = eval(this.x3_12); matrixFive[2][12] = eval(this.x3_13); matrixFive[2][13] = eval(this.x3_14); matrixFive[2][14] = eval(this.x3_15);

    matrixFive[3][0] = eval(this.x4_1); matrixFive[3][1] = eval(this.x4_2); matrixFive[3][2] = eval(this.x4_3); matrixFive[3][3] = eval(this.x4_4); matrixFive[3][4] = eval(this.x4_5);
    matrixFive[3][5] = eval(this.x4_6); matrixFive[3][6] = eval(this.x4_7); matrixFive[3][7] = eval(this.x4_8); matrixFive[3][8] = eval(this.x4_9); matrixFive[3][9] = eval(this.x4_10);
    matrixFive[3][10] = eval(this.x4_11); matrixFive[3][11] = eval(this.x4_12); matrixFive[3][12] = eval(this.x4_13); matrixFive[3][13] = eval(this.x4_14); matrixFive[3][14] = eval(this.x4_15);

    matrixFive[4][0] = eval(this.x5_1); matrixFive[4][1] = eval(this.x5_2); matrixFive[4][2] = eval(this.x5_3); matrixFive[4][3] = eval(this.x5_4); matrixFive[4][4] = eval(this.x5_5);
    matrixFive[4][5] = eval(this.x5_6); matrixFive[4][6] = eval(this.x5_7); matrixFive[4][7] = eval(this.x5_8); matrixFive[4][8] = eval(this.x5_9); matrixFive[4][9] = eval(this.x5_10);
    matrixFive[4][10] = eval(this.x5_11); matrixFive[4][11] = eval(this.x5_12); matrixFive[4][12] = eval(this.x5_13); matrixFive[4][13] = eval(this.x5_14); matrixFive[4][14] = eval(this.x5_15);

    matrixFive[5][0] = eval(this.x6_1); matrixFive[5][1] = eval(this.x6_2); matrixFive[5][2] = eval(this.x6_3); matrixFive[5][3] = eval(this.x6_4); matrixFive[5][4] = eval(this.x6_5);
    matrixFive[5][5] = eval(this.x6_6); matrixFive[5][6] = eval(this.x6_7); matrixFive[5][7] = eval(this.x6_8); matrixFive[5][8] = eval(this.x6_9); matrixFive[5][9] = eval(this.x6_10);
    matrixFive[5][10] = eval(this.x6_11); matrixFive[5][11] = eval(this.x6_12); matrixFive[5][12] = eval(this.x6_13); matrixFive[5][13] = eval(this.x6_14); matrixFive[5][14] = eval(this.x6_15);

    matrixFive[6][0] = eval(this.x7_1); matrixFive[6][1] = eval(this.x7_2); matrixFive[6][2] = eval(this.x7_3); matrixFive[6][3] = eval(this.x7_4); matrixFive[6][4] = eval(this.x7_5);
    matrixFive[6][5] = eval(this.x7_6); matrixFive[6][6] = eval(this.x7_7); matrixFive[6][7] = eval(this.x7_8); matrixFive[6][8] = eval(this.x7_9); matrixFive[6][9] = eval(this.x7_10);
    matrixFive[6][10] = eval(this.x7_11); matrixFive[6][11] = eval(this.x7_12); matrixFive[6][12] = eval(this.x7_13); matrixFive[6][13] = eval(this.x7_14); matrixFive[6][14] = eval(this.x7_15);

    matrixFive[7][0] = eval(this.x8_1); matrixFive[7][1] = eval(this.x8_2); matrixFive[7][2] = eval(this.x8_3); matrixFive[7][3] = eval(this.x8_4); matrixFive[7][4] = eval(this.x8_5);
    matrixFive[7][5] = eval(this.x8_6); matrixFive[7][6] = eval(this.x8_7); matrixFive[7][7] = eval(this.x8_8); matrixFive[7][8] = eval(this.x8_9); matrixFive[7][9] = eval(this.x8_10);
    matrixFive[7][10] = eval(this.x8_11); matrixFive[7][11] = eval(this.x8_12); matrixFive[7][12] = eval(this.x8_13); matrixFive[7][13] = eval(this.x8_14); matrixFive[7][14] = eval(this.x8_15);

    matrixFive[8][0] = eval(this.x9_1); matrixFive[8][1] = eval(this.x9_2); matrixFive[8][2] = eval(this.x9_3); matrixFive[8][3] = eval(this.x9_4); matrixFive[8][4] = eval(this.x9_5);
    matrixFive[8][5] = eval(this.x9_6); matrixFive[8][6] = eval(this.x9_7); matrixFive[8][7] = eval(this.x9_8); matrixFive[8][8] = eval(this.x9_9); matrixFive[8][9] = eval(this.x9_10);
    matrixFive[8][10] = eval(this.x9_11); matrixFive[8][11] = eval(this.x9_12); matrixFive[8][12] = eval(this.x9_13); matrixFive[8][13] = eval(this.x9_14); matrixFive[8][14] = eval(this.x9_15);

    matrixFive[9][0] = eval(this.x10_1); matrixFive[9][1] = eval(this.x10_2); matrixFive[9][2] = eval(this.x10_3); matrixFive[9][3] = eval(this.x10_4); matrixFive[9][4] = eval(this.x10_5);
    matrixFive[9][5] = eval(this.x10_6); matrixFive[9][6] = eval(this.x10_7); matrixFive[9][7] = eval(this.x10_8); matrixFive[9][8] = eval(this.x10_9); matrixFive[9][9] = eval(this.x10_10);
    matrixFive[9][10] = eval(this.x10_11); matrixFive[9][11] = eval(this.x10_12); matrixFive[9][12] = eval(this.x10_13); matrixFive[9][13] = eval(this.x10_14); matrixFive[9][14] = eval(this.x10_15);

    matrixFive[10][0] = eval(this.x11_1); matrixFive[10][1] = eval(this.x11_2); matrixFive[10][2] = eval(this.x11_3); matrixFive[10][3] = eval(this.x11_4); matrixFive[10][4] = eval(this.x11_5);
    matrixFive[10][5] = eval(this.x11_6); matrixFive[10][6] = eval(this.x11_7); matrixFive[10][7] = eval(this.x11_8); matrixFive[10][8] = eval(this.x11_9); matrixFive[10][9] = eval(this.x11_10);
    matrixFive[10][10] = eval(this.x11_11); matrixFive[10][11] = eval(this.x11_12); matrixFive[10][12] = eval(this.x11_13); matrixFive[10][13] = eval(this.x11_14); matrixFive[10][14] = eval(this.x11_15);

    matrixFive[11][0] = eval(this.x12_1); matrixFive[11][1] = eval(this.x12_2); matrixFive[11][2] = eval(this.x12_3); matrixFive[11][3] = eval(this.x12_4); matrixFive[11][4] = eval(this.x12_5);
    matrixFive[11][5] = eval(this.x12_6); matrixFive[11][6] = eval(this.x12_7); matrixFive[11][7] = eval(this.x12_8); matrixFive[11][8] = eval(this.x12_9); matrixFive[11][9] = eval(this.x12_10);
    matrixFive[11][10] = eval(this.x12_11); matrixFive[11][11] = eval(this.x12_12); matrixFive[11][12] = eval(this.x12_13); matrixFive[11][13] = eval(this.x12_14); matrixFive[11][14] = eval(this.x12_15);

    matrixFive[12][0] = eval(this.x13_1); matrixFive[12][1] = eval(this.x13_2); matrixFive[12][2] = eval(this.x13_3); matrixFive[12][3] = eval(this.x13_4); matrixFive[12][4] = eval(this.x13_5);
    matrixFive[12][5] = eval(this.x13_6); matrixFive[12][6] = eval(this.x13_7); matrixFive[12][7] = eval(this.x13_8); matrixFive[12][8] = eval(this.x13_9); matrixFive[12][9] = eval(this.x13_10);
    matrixFive[12][10] = eval(this.x13_11); matrixFive[12][11] = eval(this.x13_12); matrixFive[12][12] = eval(this.x13_13); matrixFive[12][13] = eval(this.x13_14); matrixFive[12][14] = eval(this.x13_15);

    matrixFive[13][0] = eval(this.x14_1); matrixFive[13][1] = eval(this.x14_2); matrixFive[13][2] = eval(this.x14_3); matrixFive[13][3] = eval(this.x14_4); matrixFive[13][4] = eval(this.x14_5);
    matrixFive[13][5] = eval(this.x14_6); matrixFive[13][6] = eval(this.x14_7); matrixFive[13][7] = eval(this.x14_8); matrixFive[13][8] = eval(this.x14_9); matrixFive[13][9] = eval(this.x14_10);
    matrixFive[13][10] = eval(this.x14_11); matrixFive[13][11] = eval(this.x14_12); matrixFive[13][12] = eval(this.x14_13); matrixFive[13][13] = eval(this.x14_14); matrixFive[13][14] = eval(this.x14_15);

    matrixFive[14][0] = eval(this.x15_1); matrixFive[14][1] = eval(this.x15_2); matrixFive[14][2] = eval(this.x15_3); matrixFive[14][3] = eval(this.x15_4); matrixFive[14][4] = eval(this.x15_5);
    matrixFive[14][5] = eval(this.x15_6); matrixFive[14][6] = eval(this.x15_7); matrixFive[14][7] = eval(this.x15_8); matrixFive[14][8] = eval(this.x15_9); matrixFive[14][9] = eval(this.x15_10);
    matrixFive[14][10] = eval(this.x15_11); matrixFive[14][11] = eval(this.x15_12); matrixFive[14][12] = eval(this.x15_13); matrixFive[14][13] = eval(this.x15_14); matrixFive[14][14] = eval(this.x15_15);
    console.table(matrixFive)
    return matrixFive
  }

}
