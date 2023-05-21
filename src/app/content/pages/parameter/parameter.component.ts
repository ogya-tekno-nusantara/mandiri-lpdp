import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  
  logoLpdp = logo_lpdp;

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
    this.breadcumbdItems = [{ label: 'Parameter' }];
    this.home = { label: 'Transaksi', routerLink: '/' };
  }
}
