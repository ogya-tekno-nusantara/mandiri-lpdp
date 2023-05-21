import { Component, OnInit } from '@angular/core';
import { logo_lpdp } from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard-va',
  templateUrl: './dashboard-va.component.html',
  styleUrls: ['./dashboard-va.component.css']
})
export class DashboardVaComponent implements OnInit {

    date = new Date();
    logoLpdp = logo_lpdp;

    // chart
    data: any;
    options: any;

    bankData: any[] = [];

    breadcumbdItems: MenuItem[] = [];
    home!: MenuItem;

    constructor(private bankDataService: BankDataService) { 
      this.bankDataService.getBank().then((data) => {this.bankData = data.slice(1,3)})
    }

    ngOnInit(): void {
      this._setBreadcumb();
      this._setDoughnutChartOptions();

    }

    _setBreadcumb() {
      this.breadcumbdItems = [{ label: 'Dashboard VA' }];
      this.home = { label: 'Dashboard', routerLink: '/' };
    }

    _setDoughnutChartOptions() {

      const label = Array.from(this.bankData.map(data => data.name));
      const percentage = Array.from(this.bankData.map(data => data.percentage));

      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

          this.data = {
              labels: ['Paid', 'Unpaid'],
              datasets: [
                  {
                      data: percentage,
                      backgroundColor: [
                        '#27ddbc', 
                        '#ff6060',
                      ],
                      hoverBackgroundColor: [
                        '#27ddbc',
                        '#ff6060',
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

}
