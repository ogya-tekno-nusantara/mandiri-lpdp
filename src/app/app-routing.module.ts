import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaldoComponent } from './content/pages/saldo/saldo.component';
import { PengeluaranComponent } from './content/pages/pengeluaran/pengeluaran.component';
import { DashboardVaComponent } from './content/pages/dashboard-va/dashboard-va.component';
import { ReportVaComponent } from './content/pages/report-va/report-va.component';
import { TransactionHistoryComponent } from './content/pages/transaction-history/transaction-history.component';
import { InputTransactionComponent } from './content/pages/input-transaction/input-transaction.component';
import { ReportDepositoComponent } from './content/pages/report-deposito/report-deposito.component';
import { RekeningComponent } from './content/pages/rekening/rekening.component';
import { ParameterComponent } from './content/pages/parameter/parameter.component';
import { UserManagementComponent } from './content/pages/user-management/user-management.component';
import { LoginComponent } from './content/pages/login/login.component';
import { Page404Component } from './content/pages/page404/page404.component';
import { ForgotPasswordComponent } from './content/pages/forgot-password/forgot-password.component';
import { LayoutComponent } from './core/templates/layout/layout.component';

const routes: Routes = [
  { path: 'dashboard',
    component: LayoutComponent, 
    canActivate: [],
    children: [
      { path: '', component: SaldoComponent, pathMatch: 'full'},
      { path: 'saldo', component: SaldoComponent},
      { path: 'pengeluaran', component: PengeluaranComponent },
      { path: 'dashboard-va', component: DashboardVaComponent },
      { path: 'report-va', component: ReportVaComponent },
      { path: 'transaction-history', component: TransactionHistoryComponent },
      { path: 'transaction-input', component: InputTransactionComponent },
      { path: 'report-deposito', component: ReportDepositoComponent },
      { path: 'rekening', component: RekeningComponent },
      { path: 'parameter', component: ParameterComponent },
      { path: 'user-management', component: UserManagementComponent },
    ]
  },

  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: Page404Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
