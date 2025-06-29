import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = app.get(Logger);

  app.disable('x-powered-by');

  app.useLogger(logger)
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000, void (async () => {
    const appURL = await app.getUrl();
    logger.log(process.env);
    logger.log(`Application running on ${appURL}`);
  }));
}

void bootstrap();

