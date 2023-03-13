import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      main {
        padding: 15px;
      }
      .banner {
        background: #3949ab;
        color: #fff;
        border-radius: 8px;
        padding: 5px 15px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-advanced';
}
