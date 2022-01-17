import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableOneDialogComponent } from 'src/app/pages/matrices-pages/dialog-tables/table-one-dialog/table-one-dialog.component';
import { TableThreeDialogComponent } from 'src/app/pages/matrices-pages/dialog-tables/table-three-dialog/table-three-dialog.component';
import { TableTwoDialogComponent } from 'src/app/pages/matrices-pages/dialog-tables/table-two-dialog/table-two-dialog.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SiteLayoutComponent {

  opened = false

  constructor(
    public dialog: MatDialog,
    private auth: AuthService
    ) { }

  tableOneDialog() {
    this.dialog.open(TableOneDialogComponent)
  }

  tableTwoDialog() {
    this.dialog.open(TableTwoDialogComponent)
  }

  tableThreeDialog() {
    this.dialog.open(TableThreeDialogComponent)
  }

  logout() {
    this.auth.logout()
  }

}
