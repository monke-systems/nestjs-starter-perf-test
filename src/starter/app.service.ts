import { Logger } from '@nestjs/common';

export class AppService {
  private logger = new Logger(AppService.name);
  private static plaintext = 'Im plain text';

  getPlaintext(): string {
    this.logger.debug('res with plaintext');

    return AppService.plaintext;
  }
}
