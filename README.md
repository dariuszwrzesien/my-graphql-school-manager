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
  createLesson(
    createLessonInput: {
      name: "Lekcja1"
      startDate: "2025-07-02T11:51:41.403Z"
      endDate: "2025-07-02T11:51:41.403Z"
    }
  ) {
    id
    name
  }
}
```

````graphql
query {
  query {
  lesson(id: "0aeedc66-736f-4902-8cc7-c373b05e6bbf"){
    name
  }
}
}
```

```
//get All lessons
query {
  lessons {
    name
  }
}
```

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
````
