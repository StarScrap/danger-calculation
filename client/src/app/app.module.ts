import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { TokenngInterceptor } from './shared/classes/token.interceptor';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { RegisterComponent } from './pages/auth-pages/register/register.component';
import { MatricesComponent } from './pages/matrices-pages/matrices/matrices.component';
import { TableFiveComponent } from './pages/matrices-pages/matrices/table-five/table-five.component';
import { TableFourComponent } from './pages/matrices-pages/matrices/table-four/table-four.component';
import { TableSixComponent } from './pages/matrices-pages/matrices/table-six/table-six.component';
import { TableSevenComponent } from './pages/matrices-pages/matrices/table-seven/table-seven.component';
import { ResultDialogComponent } from './pages/matrices-pages/results/result-dialog/result-dialog.component';
import { TableOneDialogComponent } from './pages/matrices-pages/dialog-tables/table-one-dialog/table-one-dialog.component';
import { TableTwoDialogComponent } from './pages/matrices-pages/dialog-tables/table-two-dialog/table-two-dialog.component';
import { TableThreeDialogComponent } from './pages/matrices-pages/dialog-tables/table-three-dialog/table-three-dialog.component';
import { ResultsComponent } from './pages/matrices-pages/results/results.component';
import { ResultPropertiesDialogComponent } from './pages/matrices-pages/results/result-properties-dialog/result-properties-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    // Auth Components
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    // Site Components
    SiteLayoutComponent,
    TableOneDialogComponent,
    TableTwoDialogComponent,
    TableThreeDialogComponent,
    MatricesComponent,
    TableFourComponent,
    TableFiveComponent,
    TableSixComponent,
    TableSevenComponent,
    ResultDialogComponent,
    ResultsComponent,
    ResultPropertiesDialogComponent
  ],
  entryComponents: [
    ResultDialogComponent,
    TableOneDialogComponent,
    TableTwoDialogComponent,
    TableThreeDialogComponent,
    ResultPropertiesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenngInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
