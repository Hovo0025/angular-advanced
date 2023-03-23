import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const date = moment();
    let todayDate = date.format('M/D/YYYY');
    console.log('todayDate', todayDate);
  }
}
