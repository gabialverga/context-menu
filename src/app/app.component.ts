import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: any;

  constructor() {
    this.items = [{
      text: 'Share',
      icon: 'fa fa-plus',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }]
    },
      { text: 'Download', icon: 'dx-icon-download' },
      { text: 'Add Comment', icon: 'dx-icon-add' },
      { text: 'Add to Favorite', icon: 'dx-icon-favorites' }
    ];
  }

  itemClick(e) {
    e.itemData.action();
  }
}
