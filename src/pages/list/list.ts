import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: string[];

  constructor() {
    // Let's populate this page with some filler content for funzies
    this.items = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }
}
