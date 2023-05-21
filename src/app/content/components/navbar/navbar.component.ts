import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { EventBusService } from 'src/app/core/shared/event-bus.service';
import { EventData } from 'src/app/core/shared/event.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Input() public actionTriger: any;

  items: MenuItem[] = [];
  userData: any;

  constructor(private eventBusService: EventBusService,) { 
    this.userData = this._getActiveUser();
  }

  ngOnInit(): void {
    console.log("sidenav toggle => ", this.actionTriger._opened)

    this.items = [
      {
        label: 'Option',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-refresh',
            command: () => {
                this.logOut();
            }
          }
        ]
    }];

  }

  logOut() {
    this.eventBusService.emit(new EventData('logout', null));
  }

  //for dummy
  _getActiveUser(): any | '' {
    const user = window.sessionStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
  }

}
