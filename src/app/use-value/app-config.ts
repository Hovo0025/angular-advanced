import { InjectionToken } from '@angular/core';
import { Logger } from '../logger';

export interface AppConfig {
  experimentalModeEnabled: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app_config', {
  providedIn: 'root',
  factory: () => ({
    experimentalModeEnabled: true,
  }),
});

export const CUSTOM_LOGGER = new InjectionToken<Logger>('CUSTOM_LOGGER');
