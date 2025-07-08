import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { MongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './create-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: MongoRepository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonRepository.save(lesson);
  }

  async getLessonById(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOneBy({ id });
    if (!lesson) {
      throw new Error(`Lesson with ID ${id} not found`);
    }
    return lesson;
  }

  async getAllLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  //   async updateLesson(id: string, lesson: Partial<Lesson>): Promise<Lesson> {
  //     await this.lessonRepository.update(id, lesson);
  //     return this.getLessonById(id);
  //   }

  //   async deleteLesson(id: string): Promise<void> {
  //     await this.lessonRepository.delete(id);
  //   }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.getLessonById(lessonId);
    lesson.students = Array.from(
      new Set([...(lesson.students || []), ...studentIds]),
    );

    return this.lessonRepository.save(lesson);
  }
}
