import { Component, OnInit } from '@angular/core';
// import cloneDeep from 'lodash-es/cloneDeep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-advanced';

  public obj = { user: { app: { appvar: 'asd' } } };

  ngOnInit() {
    // this.doSOmeTHing();
  }

  // doSOmeTHing(): { user: { app: { appvar: string } } } {
  //   return cloneDeep(this.obj);
  // }
}
