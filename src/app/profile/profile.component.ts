import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
    const date = moment();
    let todayDate = date.format('M/D/YYYY');
    console.log('todayDate', todayDate);
  }
}
