import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(1)
  @MaxLength(50)
  firstName: string;

  @Field()
  @MinLength(1)
  @MaxLength(50)
  lastName: string;
}
