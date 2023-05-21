import { Component, OnInit } from '@angular/core';
import { 
    logo_lpdp, 
    logo_bjb, 
    logo_bni,
} from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pengeluaran',
  templateUrl: './pengeluaran.component.html',
  styleUrls: ['./pengeluaran.component.css']
})
export class PengeluaranComponent implements OnInit {

    logoLpdp = logo_lpdp;
    logoBjb = logo_bjb;
    logoBni = logo_bni;

    date = new Date();
    rekeningDataOpt = [{
        label: "Semua Rekening", 
        value: "all"
    }];
    rekeningOpt: string = '';

    // chart
    data: any;
    options: any;

    barData: any;
    barOptions: any;

    bankData: any[] = [];
    transactionData: any[] = [];

    breadcumbdItems: MenuItem[] = [];
    home!: MenuItem;

    constructor(private bankDataService: BankDataService) { 
      this.bankDataService.getBank().then((data) => {this.bankData = data.slice(1,3)})
      this.bankDataService.getTransaction().then((data) => {this.transactionData = data.slice(4, 9)})
    }

    ngOnInit(): void {
      this._setBreadcumb();
      this._setDoughnutChartOptions();
      this._setBarChartOptions();

    }

    _setBreadcumb() {
      this.breadcumbdItems = [{ label: 'Pengeluaran' }];
      this.home = { label: 'Dashboard', routerLink: '/' };
    }

    setColor(key: string) {

      const documentStyle = getComputedStyle(document.documentElement);

      switch(key) {

        case 'BNI':
            return '#27ddbc';

        case 'BJB':
            return documentStyle.getPropertyValue('--yellow-500');

        default:
            return documentStyle.getPropertyValue('--blue-500');
      }

    }

    onSetImgValue(key: string) {

        const documentStyle = getComputedStyle(document.documentElement);
  
        switch(key) {
  
          case 'BNI':
              return logo_bni;
  
          case 'BJB':
              return logo_bjb;
  
          default:
              return logo_lpdp;
        }
  
      }

    _setDoughnutChartOptions() {

      const label = Array.from(this.bankData.map(data => data.name));
      const percentage = Array.from(this.bankData.map(data => data.percentage));

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

          this.data = {
              labels: label,
              datasets: [
                  {
                      data: percentage,
                      backgroundColor: [
                        '#27ddbc', 
                        documentStyle.getPropertyValue('--yellow-500'),
                      ],
                      hoverBackgroundColor: [
                        '#27ddbc',
                        documentStyle.getPropertyValue('--yellow-500'),
                      ]
                  }
              ]
          };


          this.options = {
              cutout: '60%',
              plugins: {
                  legend: {
                      labels: {
                          color: textColor,
                          usePointStyle: true
                      },
                      position: 'bottom',
                  },
                  responsive: true,
              }
          };

    }

    _setBarChartOptions() {

      const label = Array.from(this.transactionData.map(data => data.desc.toUpperCase()));
      const amount = Array.from(this.transactionData.map(data => data.amount));

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.barData = {
          labels: label,
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: '#ff6060',
                  borderColor: '#ff6060',
                  data: amount
              }
          ]
      };

      this.barOptions = {
          indexAxis: 'y',
          maintainAspectRatio: false,
          aspectRatio: 1,
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: textColor
                  }
              },
              
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
      
    }


}
