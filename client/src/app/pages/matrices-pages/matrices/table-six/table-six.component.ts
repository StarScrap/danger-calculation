import { Component } from '@angular/core';

@Component({
  selector: 'app-table-six',
  templateUrl: './table-six.component.html',
  styleUrls: ['./table-six.component.scss']
})
export class TableSixComponent {

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


  createMatrixSix() {
    let matrixSix = Array(15).fill(null).map(() => Array(15).fill(0));
    matrixSix[0][0] = eval(this.x1_1); matrixSix[0][1] = eval(this.x1_2); matrixSix[0][2] = eval(this.x1_3); matrixSix[0][3] = eval(this.x1_4); matrixSix[0][4] = eval(this.x1_5);
    matrixSix[0][5] = eval(this.x1_6); matrixSix[0][6] = eval(this.x1_7); matrixSix[0][7] = eval(this.x1_8); matrixSix[0][8] = eval(this.x1_9); matrixSix[0][9] = eval(this.x1_10);
    matrixSix[0][10] = eval(this.x1_11); matrixSix[0][11] = eval(this.x1_12); matrixSix[0][12] = eval(this.x1_13); matrixSix[0][13] = eval(this.x1_14); matrixSix[0][14] = eval(this.x1_15);

    matrixSix[1][0] = eval(this.x2_1); matrixSix[1][1] = eval(this.x2_2); matrixSix[1][2] = eval(this.x2_3); matrixSix[1][3] = eval(this.x2_4); matrixSix[1][4] = eval(this.x2_5);
    matrixSix[1][5] = eval(this.x2_6); matrixSix[1][6] = eval(this.x2_7); matrixSix[1][7] = eval(this.x2_8); matrixSix[1][8] = eval(this.x2_9); matrixSix[1][9] = eval(this.x2_11);
    matrixSix[1][10] = eval(this.x2_11); matrixSix[1][11] = eval(this.x2_12); matrixSix[1][12] = eval(this.x2_13); matrixSix[1][13] = eval(this.x2_14); matrixSix[1][14] = eval(this.x2_15);

    matrixSix[2][0] = eval(this.x3_1); matrixSix[2][1] = eval(this.x3_2); matrixSix[2][2] = eval(this.x3_3); matrixSix[2][3] = eval(this.x3_4); matrixSix[2][4] = eval(this.x3_5);
    matrixSix[2][5] = eval(this.x3_2); matrixSix[2][6] = eval(this.x3_7); matrixSix[2][7] = eval(this.x3_8); matrixSix[2][8] = eval(this.x3_9); matrixSix[2][9] = eval(this.x3_10);
    matrixSix[2][10] = eval(this.x3_11); matrixSix[2][11] = eval(this.x3_12); matrixSix[2][12] = eval(this.x3_13); matrixSix[2][13] = eval(this.x3_14); matrixSix[2][14] = eval(this.x3_15);

    matrixSix[3][0] = eval(this.x4_1); matrixSix[3][1] = eval(this.x4_2); matrixSix[3][2] = eval(this.x4_3); matrixSix[3][3] = eval(this.x4_4); matrixSix[3][4] = eval(this.x4_5);
    matrixSix[3][5] = eval(this.x4_6); matrixSix[3][6] = eval(this.x4_7); matrixSix[3][7] = eval(this.x4_8); matrixSix[3][8] = eval(this.x4_9); matrixSix[3][9] = eval(this.x4_10);
    matrixSix[3][10] = eval(this.x4_11); matrixSix[3][11] = eval(this.x4_12); matrixSix[3][12] = eval(this.x4_13); matrixSix[3][13] = eval(this.x4_14); matrixSix[3][14] = eval(this.x4_15);

    matrixSix[4][0] = eval(this.x5_1); matrixSix[4][1] = eval(this.x5_2); matrixSix[4][2] = eval(this.x5_3); matrixSix[4][3] = eval(this.x5_4); matrixSix[4][4] = eval(this.x5_5);
    matrixSix[4][5] = eval(this.x5_6); matrixSix[4][6] = eval(this.x5_7); matrixSix[4][7] = eval(this.x5_8); matrixSix[4][8] = eval(this.x5_9); matrixSix[4][9] = eval(this.x5_10);
    matrixSix[4][10] = eval(this.x5_11); matrixSix[4][11] = eval(this.x5_12); matrixSix[4][12] = eval(this.x5_13); matrixSix[4][13] = eval(this.x5_14); matrixSix[4][14] = eval(this.x5_15);

    matrixSix[5][0] = eval(this.x6_1); matrixSix[5][1] = eval(this.x6_2); matrixSix[5][2] = eval(this.x6_3); matrixSix[5][3] = eval(this.x6_4); matrixSix[5][4] = eval(this.x6_5);
    matrixSix[5][5] = eval(this.x6_6); matrixSix[5][6] = eval(this.x6_7); matrixSix[5][7] = eval(this.x6_8); matrixSix[5][8] = eval(this.x6_9); matrixSix[5][9] = eval(this.x6_10);
    matrixSix[5][10] = eval(this.x6_11); matrixSix[5][11] = eval(this.x6_12); matrixSix[5][12] = eval(this.x6_13); matrixSix[5][13] = eval(this.x6_14); matrixSix[5][14] = eval(this.x6_15);

    matrixSix[6][0] = eval(this.x7_1); matrixSix[6][1] = eval(this.x7_2); matrixSix[6][2] = eval(this.x7_3); matrixSix[6][3] = eval(this.x7_4); matrixSix[6][4] = eval(this.x7_5);
    matrixSix[6][5] = eval(this.x7_6); matrixSix[6][6] = eval(this.x7_7); matrixSix[6][7] = eval(this.x7_8); matrixSix[6][8] = eval(this.x7_9); matrixSix[6][9] = eval(this.x7_10);
    matrixSix[6][10] = eval(this.x7_11); matrixSix[6][11] = eval(this.x7_12); matrixSix[6][12] = eval(this.x7_13); matrixSix[6][13] = eval(this.x7_14); matrixSix[6][14] = eval(this.x7_15);

    matrixSix[7][0] = eval(this.x8_1); matrixSix[7][1] = eval(this.x8_2); matrixSix[7][2] = eval(this.x8_3); matrixSix[7][3] = eval(this.x8_4); matrixSix[7][4] = eval(this.x8_5);
    matrixSix[7][5] = eval(this.x8_6); matrixSix[7][6] = eval(this.x8_7); matrixSix[7][7] = eval(this.x8_8); matrixSix[7][8] = eval(this.x8_9); matrixSix[7][9] = eval(this.x8_10);
    matrixSix[7][10] = eval(this.x8_11); matrixSix[7][11] = eval(this.x8_12); matrixSix[7][12] = eval(this.x8_13); matrixSix[7][13] = eval(this.x8_14); matrixSix[7][14] = eval(this.x8_15);

    matrixSix[8][0] = eval(this.x9_1); matrixSix[8][1] = eval(this.x9_2); matrixSix[8][2] = eval(this.x9_3); matrixSix[8][3] = eval(this.x9_4); matrixSix[8][4] = eval(this.x9_5);
    matrixSix[8][5] = eval(this.x9_6); matrixSix[8][6] = eval(this.x9_7); matrixSix[8][7] = eval(this.x9_8); matrixSix[8][8] = eval(this.x9_9); matrixSix[8][9] = eval(this.x9_10);
    matrixSix[8][10] = eval(this.x9_11); matrixSix[8][11] = eval(this.x9_12); matrixSix[8][12] = eval(this.x9_13); matrixSix[8][13] = eval(this.x9_14); matrixSix[8][14] = eval(this.x9_15);

    matrixSix[9][0] = eval(this.x10_1); matrixSix[9][1] = eval(this.x10_2); matrixSix[9][2] = eval(this.x10_3); matrixSix[9][3] = eval(this.x10_4); matrixSix[9][4] = eval(this.x10_5);
    matrixSix[9][5] = eval(this.x10_6); matrixSix[9][6] = eval(this.x10_7); matrixSix[9][7] = eval(this.x10_8); matrixSix[9][8] = eval(this.x10_9); matrixSix[9][9] = eval(this.x10_10);
    matrixSix[9][10] = eval(this.x10_11); matrixSix[9][11] = eval(this.x10_12); matrixSix[9][12] = eval(this.x10_13); matrixSix[9][13] = eval(this.x10_14); matrixSix[9][14] = eval(this.x10_15);

    matrixSix[10][0] = eval(this.x11_1); matrixSix[10][1] = eval(this.x11_2); matrixSix[10][2] = eval(this.x11_3); matrixSix[10][3] = eval(this.x11_4); matrixSix[10][4] = eval(this.x11_5);
    matrixSix[10][5] = eval(this.x11_6); matrixSix[10][6] = eval(this.x11_7); matrixSix[10][7] = eval(this.x11_8); matrixSix[10][8] = eval(this.x11_9); matrixSix[10][9] = eval(this.x11_10);
    matrixSix[10][10] = eval(this.x11_11); matrixSix[10][11] = eval(this.x11_12); matrixSix[10][12] = eval(this.x11_13); matrixSix[10][13] = eval(this.x11_14); matrixSix[10][14] = eval(this.x11_15);

    matrixSix[11][0] = eval(this.x12_1); matrixSix[11][1] = eval(this.x12_2); matrixSix[11][2] = eval(this.x12_3); matrixSix[11][3] = eval(this.x12_4); matrixSix[11][4] = eval(this.x12_5);
    matrixSix[11][5] = eval(this.x12_6); matrixSix[11][6] = eval(this.x12_7); matrixSix[11][7] = eval(this.x12_8); matrixSix[11][8] = eval(this.x12_9); matrixSix[11][9] = eval(this.x12_10);
    matrixSix[11][10] = eval(this.x12_11); matrixSix[11][11] = eval(this.x12_12); matrixSix[11][12] = eval(this.x12_13); matrixSix[11][13] = eval(this.x12_14); matrixSix[11][14] = eval(this.x12_15);

    matrixSix[12][0] = eval(this.x13_1); matrixSix[12][1] = eval(this.x13_2); matrixSix[12][2] = eval(this.x13_3); matrixSix[12][3] = eval(this.x13_4); matrixSix[12][4] = eval(this.x13_5);
    matrixSix[12][5] = eval(this.x13_6); matrixSix[12][6] = eval(this.x13_7); matrixSix[12][7] = eval(this.x13_8); matrixSix[12][8] = eval(this.x13_9); matrixSix[12][9] = eval(this.x13_10);
    matrixSix[12][10] = eval(this.x13_11); matrixSix[12][11] = eval(this.x13_12); matrixSix[12][12] = eval(this.x13_13); matrixSix[12][13] = eval(this.x13_14); matrixSix[12][14] = eval(this.x13_15);

    matrixSix[13][0] = eval(this.x14_1); matrixSix[13][1] = eval(this.x14_2); matrixSix[13][2] = eval(this.x14_3); matrixSix[13][3] = eval(this.x14_4); matrixSix[13][4] = eval(this.x14_5);
    matrixSix[13][5] = eval(this.x14_6); matrixSix[13][6] = eval(this.x14_7); matrixSix[13][7] = eval(this.x14_8); matrixSix[13][8] = eval(this.x14_9); matrixSix[13][9] = eval(this.x14_10);
    matrixSix[13][10] = eval(this.x14_11); matrixSix[13][11] = eval(this.x14_12); matrixSix[13][12] = eval(this.x14_13); matrixSix[13][13] = eval(this.x14_14); matrixSix[13][14] = eval(this.x14_15);

    matrixSix[14][0] = eval(this.x15_1); matrixSix[14][1] = eval(this.x15_2); matrixSix[14][2] = eval(this.x15_3); matrixSix[14][3] = eval(this.x15_4); matrixSix[14][4] = eval(this.x15_5);
    matrixSix[14][5] = eval(this.x15_6); matrixSix[14][6] = eval(this.x15_7); matrixSix[14][7] = eval(this.x15_8); matrixSix[14][8] = eval(this.x15_9); matrixSix[14][9] = eval(this.x15_10);
    matrixSix[14][10] = eval(this.x15_11); matrixSix[14][11] = eval(this.x15_12); matrixSix[14][12] = eval(this.x15_13); matrixSix[14][13] = eval(this.x15_14); matrixSix[14][14] = eval(this.x15_15);

    console.table(matrixSix)
    return matrixSix
  }

}
