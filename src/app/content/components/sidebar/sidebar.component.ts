import { Component, OnInit } from '@angular/core';

import { logo_lpdp } from 'src/app/core/common/constant'
import { Menu } from 'src/app/core/common/role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activeIndex: number = 0;
  logoLpdp = logo_lpdp;
  
  menu = Menu;
  menuItems: any[] = [];
  subMenuItems: any[] = [];
  role: string = '';

  constructor() { 
    this.role = this._getActiveUser().role;
    this.activeIndex = this._getActiveMenu();
    this._menuItemFilterByRole();
    this._subMenuItemFilterByRole();
  }

  ngOnInit(): void {
    this.subMenuItems = this.menuItems[this.activeIndex].items
  }

  onClickItems(index: number) {
    this._setActiveMenu(index);
    this._subMenuItemFilterByRole();
  }

  _setActiveMenu(index: number) {
    this.activeIndex = index;
    window.sessionStorage.removeItem('active-menu');
    window.sessionStorage.setItem('active-menu', this.activeIndex.toString());
  }

  _getActiveMenu(): number | 0 {
    return Number(window.sessionStorage.getItem('active-menu'));
  }

  _menuItemFilterByRole() {
    this.menuItems = [];
    this.menu.map((menu: any, i: number) => {
      let check = menu.role.find((x: any) => x == this.role);
      if (check) {
        this.menuItems.push(menu)
      }
    })
  }

  _subMenuItemFilterByRole() {
    this.subMenuItems = [];
    
    const subMenuSelected = this.menuItems[this.activeIndex].items;
    subMenuSelected.map((menu: any) => {
      
      let menuSelected: any[] = [];
      menu.items.map((subMenu: any, i: number) => {
        let check = subMenu.role.find((x: any) => x == this.role);
        if (check) {
          menuSelected.push(subMenu)
        }
      })

      menu.items = menuSelected;
    })

    this.subMenuItems = subMenuSelected;
  }

  //for dummy
  _getActiveUser(): any | '' {
    const user = window.sessionStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
  }

}
