import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-report-va',
  templateUrl: './report-va.component.html',
  styleUrls: ['./report-va.component.css']
})
export class ReportVaComponent implements OnInit {

  date = new Date();
  logoLpdp = logo_lpdp;

  bankDataOpt = [{
    label: "Semua Bank", 
    value: "all"
  }];

  bankOpt: string = '';
  statusDataOpt = [{
    label: "Semua Status", 
    value: "all"
  }];
  statusOpt: string = '';

  vaNumber: string = ''

  breadcumbdItems: MenuItem[] = [];
  home!: MenuItem;

  dataVA: any[] = [];

  constructor(private bankDataService: BankDataService) {
    this.bankDataService.getVATransaction().then((data) => {this.dataVA = data})
  }

  ngOnInit(): void {
    this._setBreadcumb();
  }

  toUpperCase(value: string): string {
    return value.toUpperCase();
  }

  _setBreadcumb() {
    this.breadcumbdItems = [{ label: 'Report VA' }];
    this.home = { label: 'Dashboard', routerLink: '/' };
  }

}
