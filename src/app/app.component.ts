import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  items = [
    'Blood Glucose',
    'Medication',
    'Food Tracking',
    'Exercise',
    'Weight Management',
    'Blood Pressure',
    'A1C',
  ];
  selectedItem = 'Blood Glucose';
  selectedNav = 0;
  navs = [0, 1, 2, 3, 4];

  back() {
    if (this.selectedNav > 0) this.selectedNav--;
  }
  next() {
    if (this.selectedNav < this.navs[this.navs.length - 1]) this.selectedNav++;
  }
}
