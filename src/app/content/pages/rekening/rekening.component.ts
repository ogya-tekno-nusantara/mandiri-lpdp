import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

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
    this.breadcumbdItems = [{ label: 'Daftar Rekening' }];
    this.home = { label: 'Transaksi', routerLink: '/' };
  }
}
