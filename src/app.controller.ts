import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Record<string, any> {
    return this.appService.getHello();
  }

  @Get('version')
  getVersion(): Record<string, any> {
    return this.appService.getVersion();
  }
}
