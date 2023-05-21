export const Menu = [
    {
        role: ['AR', 'AP', 'master'],
        label: 'Dashboard',
        icon: 'pi pi-slack',
        items: [
            {
                label: 'Dashboard',
                items: [
                    {
                        role: ['AR', 'AP', 'master'],
                        label: 'Saldo',
                        icon: 'pi pi-fw pi-wallet',
                        routerLink: ['saldo']
                    },
                    {
                        role: ['AR', 'AP', 'master'],
                        label: 'Pengeluaran',
                        icon: 'pi pi-external-link',
                        routerLink: ['pengeluaran']
                    },
                    {
                        role: ['AR', 'AP', 'master'],
                        label: 'Riwayat Transaksi',
                        icon: 'pi pi-clock',
                        routerLink: ['transaction-history']
                    },
                    {
                        role: ['AR', 'master'],
                        label: 'Collection Dashboard',
                        icon: 'pi pi-credit-card',
                        routerLink: ['dashboard-va']
                    },
                    {
                        role: ['AR', 'master'],
                        label: 'Reconciliation',
                        icon: 'pi pi-th-large',
                        routerLink: ['report-va']
                    },
                    {
                        role: ['AR', 'master'],
                        label: 'Report Deposito',
                        icon: 'pi pi-book',
                        routerLink: ['report-deposito']
                    },
                ]
            },
        ]
    },
    {
        role: ['admin', 'master'],
        label: 'Input',
        icon: 'pi pi-clone',
        items: [
            {
                label: 'Input Transaksi',
                items: [
                    {
                        role: ['admin', 'master'],
                        label: 'Buat Transaksi',
                        icon: 'pi pi-pencil',
                        routerLink: ['transaction-input']
                    },
                    {
                        role: ['admin', 'master'],
                        label: 'Rekening',
                        icon: 'pi pi-list',
                        routerLink: ['rekening']
                    },
                    {
                        role: ['admin', 'master'],
                        label: 'Parameter',
                        icon: 'pi pi-cog',
                        routerLink: ['parameter']
                    }
                ]
            },
        ]
    },
    {
        role: ['admin', 'master'],
        label: 'User Management',
        icon: 'pi pi-users',
        items: [
            {
                label: 'User Management',
                items: [
                    {
                        role: ['admin', 'master'],
                        label: 'Daftar User',
                        icon: 'pi pi-user-edit',
                        routerLink: ['user-management']
                    },
                ]
            },
        ]
    },
]