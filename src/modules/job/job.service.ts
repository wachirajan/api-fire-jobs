import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobEntity } from 'src/entities/job.entity';
import { Repository } from 'typeorm';
import { jobDTO } from './dto/job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}

  async getJob() {
    const r = await this.jobRepository.find();
    return r;
  }

  async createJob(jobDTO: jobDTO) {
    const a = this.jobRepository.create(jobDTO);
    const b = await this.jobRepository.save(jobDTO);
    return b;
  }
}
