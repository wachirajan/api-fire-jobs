import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JobModule } from './modules/job';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: false }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: '7OqO250HXG',
      password: '6t3DQMLYzW',
      database: '7OqO250HXG',
      entities: ['dist/entities/*{.ts,.js}'],
      synchronize: true,
    }),
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
