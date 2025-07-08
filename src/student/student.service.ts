import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: MongoRepository<Student>,
  ) {}

  async getStudentById(id: string): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    return student;
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    console.log('createStudentInput', createStudentInput);
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getStudents(studentIds: string[]): Promise<Student[]> {
    if (!studentIds || studentIds.length === 0) {
      return [];
    }

    const students = await this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });

    return students;
  }
}
