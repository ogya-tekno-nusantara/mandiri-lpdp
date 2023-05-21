import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

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
  bankData: any[] = [];

  constructor(private bankDataService: BankDataService) {
    this.bankDataService.getAccountTransaction().then((data) => {this.dataAccount = data})
    this.bankDataService.getBank().then((data) => {this.bankData = data.slice(1,3)})
  }

  ngOnInit(): void {
    this._setBreadcumb();
    this._setPieChartOptions();
  }

  _setBreadcumb() {
    this.breadcumbdItems = [{ label: 'Riwayat Transaksi' }];
    this.home = { label: 'Dashboard', routerLink: '/' };
  }

  _setPieChartOptions() {
      
      const percentage = Array.from(this.bankData.map(data => data.percentage));
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');


      this.data = {
          labels: ['Cash In', 'Cash Out'],
          datasets: [
              {
                  data: percentage,
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                position: 'bottom',
                  labels: {
                      usePointStyle: true,
                      color: textColor
                  }
              },
              responsive: true,
          }
      };
  }


}
