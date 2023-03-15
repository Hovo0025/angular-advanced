import { Component, inject, Injector, Input, TemplateRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'weather-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent {
  @Input() widgetHeader!: TemplateRef<any>;
  @Input() widgetContent!: TemplateRef<WidgetState>;
  @Input() widgetActions!: TemplateRef<any>;

  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector);
}
