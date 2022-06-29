import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SideMenuComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dinamics'
    }, {
      text: 'Switches',
      route: './template/switches'
    }
  ];
  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dinamics'
    }, {
      text: 'Switches',
      route: './reactive/switches'
    }
  ];
  authMenu: MenuItem[] = [
    {
      text: 'Registro',
      route: './auth/register'
    },
    {
      text: 'Login',
      route: './auth/login'
    }
  ];


}
