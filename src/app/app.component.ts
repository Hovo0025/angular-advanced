import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { WeatherCustomActionComponent } from './widgets/weather-custom-action/weather-custom-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent, WeatherCustomActionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
