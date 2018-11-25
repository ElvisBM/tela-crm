import { Component, OnInit } from '@angular/core';
import { MENU } from './../menu/menulist';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuList = MENU;

  constructor() { }
}
