import { Component, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  template: '<button (click)="onClick()">Reload and Copy</button>',
})
export class WeatherCustomActionComponent {
  weatherWidgetComponent = inject(WeatherWidgetComponent);
  onClick() {
    this.weatherWidgetComponent.actions.reload();
    this.weatherWidgetComponent.actions.copyData();
  }
}
