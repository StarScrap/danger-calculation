import { Component } from '@angular/core';
import { TableOne } from 'src/app/interfaces/Tables';

export const TABLE_ONE: TableOne[] = [
  { index: 'X1', name: 'Низький рівень наочної агітації з безпеки праці' },
  { index: 'X2', name: 'Невиконання діючих вимог щодо ведення документації з охорони праці' },
  { index: 'X3', name: 'Невиконання запланованих заходів у визначені терміни ' },
  { index: 'X4', name: 'Невиконання приписів з охорони праці у визначені терміни' },
  { index: 'X5', name: 'Порушення періодичності контролю за станом охорони праці в структурних підрозділах' },
  { index: 'X6', name: 'Перевищення частоти травматизму на підприємстві над частотою по галузі ' },
  { index: 'X7', name: 'Перевищення важкості травматизму на підприємстві над важкістю по галузі' },
  { index: 'X8', name: 'Невиконання заходів, передбачених в актах з розслідування нещасних випадків у визначені терміни ' },
  { index: 'X9', name: 'Непідготовленість персоналу з охорони праці' },
  { index: 'X10', name: 'Порушення періодичності проведення інструктажів, атестації та переатестації з безпеки праці' },
  { index: 'X11', name: 'Грубе порушення правил безпеки праці, допущення аварій ' },
  { index: 'X12', name: 'Невикористання робітниками засобів індивідуальних захисту та спецодягу' },
  { index: 'X13', name: 'Рівень забезпеченості побутовими приміщеннями' },
  { index: 'X14', name: 'Надпланове виконання заходів щодо покращення умов праці' },
  { index: 'X15', name: 'Впровадження пропозицій щодо покращення умов праці' },

]

@Component({
  selector: 'app-table-one-dialog',
  templateUrl: './table-one-dialog.component.html',
  styleUrls: ['./table-one-dialog.component.scss']
})
export class TableOneDialogComponent {

  tableColumns: string[] = ['index', 'name']
  tableSource: object[] = TABLE_ONE

}