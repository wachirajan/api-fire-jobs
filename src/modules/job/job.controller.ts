import { Body, Controller, Get, Post } from '@nestjs/common';
import { jobDTO } from './dto/job.dto';
import { JobService } from './job.service';

@Controller('/v1/job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getHello() {
    const r = await this.jobService.getJob();
    return r;
  }

  @Post()
  async postJob(@Body() job: jobDTO) {}
}
