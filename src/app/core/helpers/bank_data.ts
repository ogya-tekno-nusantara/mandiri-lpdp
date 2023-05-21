import { Injectable } from '@angular/core';
    
@Injectable()
export class BankDataService {
    getBankData() {
        return [
            {
                id: '1',
                name: 'MANDIRI',
                image: 'mandiri.png',
                amount: 'Rp. 5.000.000.000',
                percentage: 50,
            },
            {
                id: '2',
                name: 'BNI',
                image: 'bni.png',
                amount: 'Rp. 2.500.000.000',
                percentage: 25,
            },
            {
                id: '3',
                name: 'BJB',
                image: 'bjb.png',
                amount: 'Rp. 1.500.000.000',
                percentage: 15,
            },
            {
                id: '4',
                name: 'CIMB',
                image: 'cimb.png',
                amount: 'Rp. 500.000.000',
                percentage: 25,
            },
            {
                id: '5',
                name: 'MUAMALAT',
                image: 'muamalat.png',
                amount: 'Rp. 500.000.000',
                percentage: 35,
            },
        ];
    }

    getTransactionData() {
        return [
            {
                id: '1',
                lable: 'GIR',
                desc: 'Giro',
                amount: 800000000,
                percentage: 40,
            },
            {
                id: '2',
                lable: 'DEP',
                desc: 'Deposito',
                amount: 400000000,
                percentage: 38,
            },
            {
                id: '3',
                lable: 'INV',
                desc: 'Investasi',
                amount: 1200000000,
                percentage: 15,
            },
            {
                id: '4',
                lable: 'INV',
                desc: 'Saham',
                amount: 600000000,
                percentage: 25,
            },

            {
                id: '5',
                lable: 'PEG',
                desc: 'PEGAWAI',
                amount: 800000000,
                percentage: 40,
            },
            {
                id: '6',
                lable: 'MOD',
                desc: 'MODAL',
                amount: 400000000,
                percentage: 38,
            },
            {
                id: '7',
                lable: 'BAR',
                desc: 'BARANG',
                amount: 1200000000,
                percentage: 15,
            },
            {
                id: '8',
                lable: 'JAS',
                desc: 'JASA',
                amount: 600000000,
                percentage: 25,
            },
            {
                id: '9',
                lable: 'LAI',
                desc: 'LAIN - LAIN',
                amount: 600000000,
                percentage: 25,
            },
        ];
    }

    getVAData() {
        return [
            {
                id: '1',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: '',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Unpaid',
                pay_date:'01-01-2024'
            },
            {
                id: '2',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Paid',
                pay_date:'01-01-2024'
            },
            {
                id: '3',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Unpaid',
                pay_date:'01-01-2024'
            },
            {
                id: '4',
                number_va: '1921344556677888',
                bank: 'BNI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'unmatch',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Unpaid',
                pay_date:'01-01-2024'
            },
            {
                id: '5',
                number_va: '1921344556677888',
                bank: 'BNI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Paid',
                pay_date:'01-01-2024'
            },
            {
                id: '6',
                number_va: '1921344556677888',
                bank: 'BNI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Paid',
                pay_date:'01-01-2024'
            },
            {
                id: '7',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Paid',
                pay_date:'01-01-2024'
            },
            {
                id: '8',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Paid',
                pay_date:'01-01-2024'
            },
            {
                id: '9',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Unpaid',
                pay_date:'01-01-2024'
            },
            {
                id: '10',
                number_va: '1921344556677888',
                bank: 'MANDIRI',
                main_amount: '10.800.000',
                interest_amount: '800.000',
                amount: '12.000.000',
                reconcil: 'match',
                period: '1 Bulan',
                due_date: '01-01-2024',
                status: 'Unpaid',
                pay_date:'01-01-2024'
            },
            
        ];
    }

    getAccountData() {
        return [
            {
                id: '1',
                bank: 'MANDIRI',
                account: '192134455',
                date: '01-01-2024',
                mutation: 'Debit',
                amount: '12.000.000',
                channel: 'M-Bank',
                transaction_type: 'Mutasi',
                source_fund: 'APBN',
                transaction_info: '-',
                source_data:'MT940'
            },
            {
                id: '2',
                bank: 'BCA',
                account: '192134455',
                date: '01-01-2024',
                mutation: 'kredit',
                amount: '12.000.000',
                channel: 'ATM',
                transaction_type: 'Tidak Mutasi',
                source_fund: 'Hibah',
                transaction_info: '-',
                source_data:'MT940'
            },
            {
                id: '3',
                bank: 'BNI',
                account: '192134455',
                date: '01-01-2024',
                mutation: 'Debit',
                amount: '12.000.000',
                channel: 'ATM',
                transaction_type: 'Mutasi',
                source_fund: 'BPPTNBH',
                transaction_info: '-',
                source_data:'Input'
            },
        ];
    }

    getBank() {
        return Promise.resolve(this.getBankData());
    }

    getTransaction() {
        return Promise.resolve(this.getTransactionData());
    }

    getVATransaction() {
        return Promise.resolve(this.getVAData());
    }

    getAccountTransaction() {
        return Promise.resolve(this.getAccountData());
    }

};