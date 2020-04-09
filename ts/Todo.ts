import * as uuid from 'uuid';

export class Todo {
  id: string;
  title: string;
  isDone: boolean;

  newId(): string {
    return uuid.v4();
  }
}
