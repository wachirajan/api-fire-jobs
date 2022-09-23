import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('job')
export class JobEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'job_id' })
  jobId: string;

  @Column('nvarchar', { name: 'job_name' })
  jobName: string;
}
