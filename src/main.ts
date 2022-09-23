import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

const globalPrefix = '/api';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3100);

  const logger = new Logger('Main', { timestamp: true });
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3100);
}
bootstrap();
