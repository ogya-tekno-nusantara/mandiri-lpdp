import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DatePipe } from '@angular/common'

//---material---//
import { MatSidenavModule } from '@angular/material/sidenav';

//---primeng---//
import { PrimengModule } from './primeng.module';

//---component---//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './content/components/sidebar/sidebar.component';
import { NavbarComponent } from './content/components/navbar/navbar.component';
import { SaldoComponent } from './content/pages/saldo/saldo.component';
import { PengeluaranComponent } from './content/pages/pengeluaran/pengeluaran.component';
import { BankDataService } from './core/helpers/bank_data';
import { DashboardVaComponent } from './content/pages/dashboard-va/dashboard-va.component';
import { ReportVaComponent } from './content/pages/report-va/report-va.component';
import { TransactionHistoryComponent } from './content/pages/transaction-history/transaction-history.component';
import { InputTransactionComponent } from './content/pages/input-transaction/input-transaction.component';
import { ReportDepositoComponent } from './content/pages/report-deposito/report-deposito.component';
import { RekeningComponent } from './content/pages/rekening/rekening.component';
import { ParameterComponent } from './content/pages/parameter/parameter.component';
import { UserManagementComponent } from './content/pages/user-management/user-management.component';
import { Page404Component } from './content/pages/page404/page404.component';
import { LoginComponent } from './content/pages/login/login.component';
import { ForgotPasswordComponent } from './content/pages/forgot-password/forgot-password.component';
import { LayoutComponent } from './core/templates/layout/layout.component';
import { UserService } from './core/helpers/user_data';




@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SaldoComponent,
    PengeluaranComponent,
    DashboardVaComponent,
    ReportVaComponent,
    TransactionHistoryComponent,
    InputTransactionComponent,
    ReportDepositoComponent,
    RekeningComponent,
    ParameterComponent,
    UserManagementComponent,
    LayoutComponent,
    Page404Component,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    MatSidenavModule,

    PrimengModule
  ],
  providers: [
    DatePipe,

    //dumy
    BankDataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
