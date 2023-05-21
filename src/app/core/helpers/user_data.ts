import { Injectable } from '@angular/core';
    
@Injectable()
export class UserService {

    getDataUsers() {
        return [
            {
                username: 'user1',
                pass: '123',
                name: 'Account Receivable',
                role: 'AR'
            },
            {
                username: 'user2',
                pass: '123',
                name: 'Account Payable',
                role: 'AP'
            },
            {
                username: 'admin',
                pass: '123',
                name: 'Admin',
                role: 'admin'
            },
            {
                username: 'master',
                pass: '123',
                name: 'Super Admin',
                role: 'master'
            }
        ];
    }

    getUsers() {
        return Promise.resolve(this.getDataUsers());
    }

};