import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-input-transaction',
  templateUrl: './input-transaction.component.html',
  styleUrls: ['./input-transaction.component.css']
})
export class InputTransactionComponent implements OnInit {

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

  channelDataOpt = [{
    label: "Pilih Channel", 
    value: "all"
  }];
  channelOpt: string = '';

  SourceFundDataOpt = [{
    label: "APBN", 
    value: "all"
  }];
  SourceFundOpt: string = '';

  amount: string = '';
  desc: string = ''

  selectedCategory: any = null;

  categories: any[] = [
      { name: 'Debit', key: 'A' },
      { name: 'Kredit', key: 'M' },
  ];

  config: any = {
    bank: '',
    account: '',
    data: [{
      date: '',
      mutation: 'A',
      amount: '',
      channel: 'all',
      desc: '',
      sourceFund: 'all',
    }]
  }

  breadcumbdItems: MenuItem[] = [];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
    this._setBreadcumb();
  }

  onAddItems() {
    this.config['data'].push({
      date: '',
      mutation: 'A',
      amount: '',
      channel: 'all',
      desc: '',
      sourceFund: 'all',
    })
  }

  onRemoveItems(index: number) {
    if (this.config['data'].length > 1) {
      this.config['data'].splice(index, 1)
    }
  }

  _setBreadcumb() {
    this.breadcumbdItems = [{ label: 'Buat Transaksi' }];
    this.home = { label: 'Transaksi', routerLink: '/' };
  }

}
