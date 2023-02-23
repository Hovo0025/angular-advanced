import { Logger } from '../logger';

export const LegacyLogger: Logger = {
  prefix: 'Legacy logger',
  log(message: string): void {
    console.log(`${this.prefix} (LEGACY): ${message}`);
  },
};
