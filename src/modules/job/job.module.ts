import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEntity as Job } from 'src/entities/job.entity';
import { JobController } from './job.controller';
import { JobService } from './job.service';

const db = TypeOrmModule.forFeature([Job]);
@Module({
  imports: [db],
  controllers: [JobController],
  providers: [JobService],
})
export class JobModule {}
