import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private service: AppService) {}

  @Get('/plaintext')
  getHello() {
    this.logger.log('got plaintext request');

    return this.service.getPlaintext();
  }
}
