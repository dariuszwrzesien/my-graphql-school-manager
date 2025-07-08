import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './create-lesson.input';
import { AssignStudentToLessonInput } from './assign-student-to-lesson-input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string): Promise<LessonType> {
    return this.lessonService.getLessonById(id);
  }

  @Query((returns) => [LessonType])
  lessons(): Promise<LessonType[]> {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentToLessonInput')
    assignStudentToLessonInput: AssignStudentToLessonInput,
  ): Promise<LessonType> {
    return this.lessonService.assignStudentsToLesson(
      assignStudentToLessonInput.lessonId,
      assignStudentToLessonInput.studentIds,
    );
  }

  // ResolveField to get students for a lesson
  // This will resolve the students field in the LessonType
  // by calling the lessonService to fetch students for the lesson
  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    console.log('lesson', lesson);
    return this.studentService.getStudents(lesson.students);
  }
}
