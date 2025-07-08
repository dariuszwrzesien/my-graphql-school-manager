import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { UUID_VERSION } from '../consts';

@InputType()
export class AssignStudentToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID(UUID_VERSION, { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
