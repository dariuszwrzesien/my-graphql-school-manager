import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString, IsUUID } from 'class-validator';
import { UUID_VERSION } from '../consts';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  @IsUUID(UUID_VERSION, { each: true })
  students: string[];
}
