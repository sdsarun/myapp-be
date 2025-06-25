import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/health")
  getHealth() {
    return {
      status: "I'm okay.",
      timestamp: Date.now()
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
