import { Component, OnInit } from '@angular/core';

import { 
    logo_lpdp, 
    logo_bjb, 
    logo_bni, 
    logo_cimb, 
    logo_mandiri, 
    logo_muamalat 
} from 'src/app/core/common/constant'

//dumy
import { BankDataService } from 'src/app/core/helpers/bank_data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

    logoLpdp = logo_lpdp;
    logoMandiri = logo_mandiri;
    logoBjb = logo_bjb;
    logoMuamalat = logo_muamalat;
    logoBni = logo_bni;
    logoCimb = logo_cimb;

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
        this.bankDataService.getBank().then((data) => {this.bankData = data})
        this.bankDataService.getTransaction().then((data) => {this.transactionData = data.slice(0, 4)})
    }

    ngOnInit(): void {
        this._setBreadcumb();
        this._setDoughnutChartOptions();
        this._setBarChartOptions();

    }

    onSetImgValue(key: string) {
        switch(key) {
            case 'MANDIRI':
                return logo_mandiri;
    
            case 'BNI':
                return logo_bni;
    
            case 'BJB':
                return logo_bjb;
    
            case 'CIMB':
                return logo_cimb;
    
            case 'MUAMALAT':
                return logo_muamalat;
    
            default:
                return logo_lpdp;
            }
    }

    _setBreadcumb() {
        this.breadcumbdItems = [{ label: 'Saldo' }];
        this.home = { label: 'Dashboard', routerLink: '/' };
    }

    setColor(key: string) {

        const documentStyle = getComputedStyle(document.documentElement);

        switch(key) {
        case 'MANDIRI':
            return documentStyle.getPropertyValue('--blue-500');

        case 'BNI':
            return documentStyle.getPropertyValue('--green-400');

        case 'BJB':
            return documentStyle.getPropertyValue('--orange-500');

        case 'CIMB':
            return documentStyle.getPropertyValue('--indigo-500');

        case 'MUAMALAT':
            return documentStyle.getPropertyValue('--yellow-500');

        default:
            return documentStyle.getPropertyValue('--blue-500');
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
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--green-400'), 
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        ],
                        hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--green-400'), 
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
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
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
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
