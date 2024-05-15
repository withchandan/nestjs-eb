import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Record<string, any> {
    return { message: 'Hello World!' };
  }

  getVersion(): Record<string, any> {
    return { version: 123 };
  }
}
