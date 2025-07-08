#School Manager

## Description

An application designed using GraphQL to manage and provide access to lesson and student data.
The primary objective of this project is to establish a basic structure or skeleton of a GraphQL-based application built with the NestJS framework.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

Visit: `localhost:3000/graphql`

```graphql
mutation {
  createStudent(
    createStudentInput: { firstName: "Stefan", lastName: "Kudłaty" }
  ) {
    id
    firstName
    lastName
  }
}

mutation {
  createLesson(
    createLessonInput: {
      name: "Lekcja 123 z uczniami"
      startDate: "2025-07-02T11:51:41.403Z"
      endDate: "2025-07-02T11:51:41.403Z"
      students: [
        "15a2fdcb-9a9d-415c-84c5-993ce238e85b"
        "697bf7b5-6bad-4cad-9eb4-ceefab026cb0"
      ]
    }
  ) {
    id
    name
    students {
      firstName
      lastName
    }
  }
}

mutation {
  assignStudentsToLesson(assignStudentToLessonInput: {
    lessonId: "6ecf0615-bd89-4292-b4d5-1d6de2b4daad"
    studentIds: ["947864d9-dd66-4a8a-bdff-fb4befe6360f", "64f43bef-d6b0-411e-b130-e8f0d452b13e"]
  }){
    id, name
  }
}

query {
  query {
  lesson(id: "0aeedc66-736f-4902-8cc7-c373b05e6bbf"){
    name
  }
}
}

//get All lessons
query {
  lessons {
    name
  }
}

```

for more check DOCS and SCHEMA section in graphQl playground (`localhost:3000/graphql`)

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
