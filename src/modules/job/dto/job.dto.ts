import { IsNotEmpty } from 'class-validator';

export class jobDTO {
  jobId: string;
  @IsNotEmpty({ message: 'Required.' })
  jobName: string;
}
