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
      text: 'Set Evidence',
      icon: 'fa fa-plus',
      items: [
        {
          text: 'Low',
          action: function () {
            console.log('Evidencia: Low');
          }
        },
        {
          text: 'Medium',
          action: function () {
            console.log('Evidencia: Medium');
          }
        },
        {
          text: 'High',
          action: function () {
            console.log('Evidencia: High');
          }
        }
      ]
    }];
  }

  itemClick(e) {
    e.itemData.action();
  }
}
