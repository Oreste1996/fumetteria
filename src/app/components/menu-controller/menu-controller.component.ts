import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-controller',
  templateUrl: './menu-controller.component.html',
  styleUrls: ['./menu-controller.component.scss'],
})
export class MenuControllerComponent implements OnInit {

  constructor(private menu: MenuController) { }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit(){}

}
