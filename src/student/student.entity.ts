import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  // This is used for MongoDB ObjectId.
  // We hide it from GraphQL because it is not good practice to expose MongoDB's internal identifiers.
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
