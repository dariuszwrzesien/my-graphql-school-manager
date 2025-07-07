import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(id);
  }

  @Query(() => [StudentType])
  students(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
