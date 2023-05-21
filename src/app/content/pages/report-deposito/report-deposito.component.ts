import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-report-deposito',
  templateUrl: './report-deposito.component.html',
  styleUrls: ['./report-deposito.component.css']
})
export class ReportDepositoComponent implements OnInit {

  date = new Date();
  logoLpdp = logo_lpdp;

  bankDataOpt = [{
    label: "Semua Bank", 
    value: "all"
  }];

  bankOpt: string = '';
  rekeningDataOpt = [{
    label: "Semua Rekening", 
    value: "all"
  }];
  rekeningOpt: string = '';

  // chart
  data: any;
  options: any;

  breadcumbdItems: MenuItem[] = [];
  home!: MenuItem;

  dataAccount: any[] = [];

  constructor(private bankDataService: BankDataService) {
    this.bankDataService.getAccountTransaction().then((data) => {this.dataAccount = data})
  }

  ngOnInit(): void {
    this._setBreadcumb();
  }

  _setBreadcumb() {
    this.breadcumbdItems = [{ label: 'Report Deposito' }];
    this.home = { label: 'Dashboard', routerLink: '/' };
  }

}
