import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000, async () => {
    const appURL = await app.getUrl()
    Logger.log(process.env);
    Logger.log(`Application running on ${appURL}`);
  });
}

void bootstrap();
